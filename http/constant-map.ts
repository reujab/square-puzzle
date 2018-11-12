export interface Matches {
	constant: string,
	functions: string[],
}

export default [
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
] as Matches[]
