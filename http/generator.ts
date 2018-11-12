import _ from "lodash"
import map from "./constant-map"

export default function generate(): string[][][] {
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
				if (col === 0) {
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
				if (row === 0) {
					// marks one outer corner
					square[3] = ""
				} else {
					square[3] = getConstant()
				}
			}
		}
	}

	// shuffles columns
	for (let row = 0; row < rows.length; row++) {
		rows[row] = _.shuffle(rows[row])

		// rotates squares
		for (const square of rows[row]) {
			for (let i = 0; i < _.random(square.length - 1); i++) {
				square.push(square.shift())
			}
		}
	}

	// shuffles rows
	return _.shuffle(rows)
}

// returns a random function
function getFunction(): string {
	return _.sample(_.sample(map).functions)
}

// returns a random constant
function getConstant(): string {
	return _.sample(map).constant
}
