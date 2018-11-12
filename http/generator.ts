import _ from "lodash"

interface Matches {
	constant: string,
	functions: string[],
}

const map: Matches[] = [
	{
		constant: "\\text{undefined}",
		functions: [
			"\\csc 0^\\circ",
			"\\cot 0^\\circ",
		],
	},
	{
		constant: "0",
		functions: [
			"\\sin 0^\\circ",
			"\\tan 0^\\circ",
		]
	},
	{
		constant: "\\frac{1}{2}",
		functions: [
			"\\sin 30^\\circ",
			"\\cos 60^\\circ",
		],
	},
	{
		constant: "\\frac{\\sqrt{3}}{3}",
		functions: [
			"\\tan 30^\\circ",
			"\\cot 60^\\circ",
		],
	},
	{
		constant: "\\frac{\\sqrt{2}}{2}",
		functions: [
			"\\sin 45^\\circ",
			"\\cos 45^\\circ",
		],
	},
	{
		constant: "\\frac{\\sqrt{3}}{2}",
		functions: [
			"\\sin 60^\\circ",
			"\\cos 30^\\circ",
		],
	},
	{
		constant: "1",
		functions: [
			"\\cos 0^\\circ",
			"\\tan 45^\\circ",
			"\\sec 0^\\circ",
			"\\cot 45^\\circ"
		],
	},
	{
		constant: "\\frac{2\\sqrt{3}}{3}",
		functions: [
			"\\csc 60^\\circ",
			"\\sec 30^\\circ",
		],
	},
	{
		constant: "\\sqrt{2}",
		functions: [
			"\\csc 45^\\circ",
			"\\sec 45^\\circ",
		],
	},
	{
		constant: "\\sqrt{3}",
		functions: [
			"\\tan 60^\\circ",
			"\\cot 30^\\circ",
		],
	},
	{
		constant: "2",
		functions: [
			"\\csc 30^\\circ",
			"\\sec 60^\\circ",
		],
	},
]

export default function generate(): string[][][] {
	// TODO: the first three constants in this array appear only once and have only one matching function
	// the first four constants in this array cannot be edges of the outer square
	const shuffled = _.shuffle(map)

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
					square[0] = getEdgeConstant(shuffled)
				}
			}

			// right expression
			if (col === 3) {
				square[1] = getEdgeConstant(shuffled)
			} else {
				const sample = _.sample(shuffled)
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
				square[2] = getEdgeConstant(shuffled)
			} else {
				const sample = _.sample(shuffled)
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
					square[3] = getEdgeConstant(shuffled)
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

// returns a random constant (excluding the first four)
function getEdgeConstant(map: Matches[]): string {
	return _.sample(map.slice(4)).constant
}

// returns a random function
function getFunction(map: Matches[]): string {
	return _.sample(_.sample(map).functions)
}

// returns a random constant
function getConstant(map: Matches[]): string {
	return _.sample(map).constant
}
