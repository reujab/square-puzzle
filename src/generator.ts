import _ from "lodash"
import map from "./constant-map"
import { iPuzzle, Settings } from "./types"

export default function generate(settings: Settings): iPuzzle {
	// 4x4 multidimensional array
	const rows = [
		[[], [], [], []],
		[[], [], [], []],
		[[], [], [], []],
		[[], [], [], []],
	]

	for (let row = 0; row < rows.length; row++) {
		for (let col = 0; col < rows[row].length; col++) {
			const square = rows[row][col]

			// top expression
			// checks if the the expression will be on the an edge of the outer square
			// if it is, select a random edge constant
			if (row === 0) {
				if (col === 0 && settings.revealCorner) {
					// marks one outer corner
					square[0] = ""
				} else {
					square[0] = getConstant()
				}
			}

			// right expression
			if (col === 3) {
				square[1] = getConstant()
			} else {
				const sample = _.sample(map)
				const pair = _.shuffle([
					sample.constant,
					_.sample(sample.functions),
				]);

				// sets the right expression of this square
				square[1] = pair[0]
				// sets the left expression of the adjacent square to the match
				rows[row][col + 1][3] = pair[1]
			}

			// bottom expression
			if (row === 3) {
				square[2] = getConstant()
			} else {
				const sample = _.sample(map)
				const pair = _.shuffle([
					sample.constant,
					_.sample(sample.functions),
				]);

				// sets the bottom expression of this square
				square[2] = pair[0]
				// sets the top expression of the adjacent square to the match
				rows[row + 1][col][0] = pair[1]
			}

			// left expression
			if (col === 0) {
				if (row === 0 && settings.revealCorner) {
					// marks one outer corner
					square[3] = ""
				} else {
					square[3] = getConstant()
				}
			}
		}
	}

	return {
		solved: rows,
		// shuffles tile position
		shuffled: _.chunk(_.shuffle(_.flatten(_.cloneDeep(rows))), 4).
			// rotates squares
			map((row) => row.map((square) => {
				for (let i = 0; i < _.random(square.length - 1); i++) {
					square.push(square.shift())
				}
				return square
			}))
	}
}

// returns a random constant
function getConstant(): string {
	return _.sample(map).constant
}
