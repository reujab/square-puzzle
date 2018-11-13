const rows = [
	[
		[
			"sqrt(3)/2",
			"sec 45deg",
			"tan 60deg",
			"sqrt(2)/2",
		],
		[
			"1",
			"sin 45deg",
			"1/2",
			"sqrt(2)",
		],
		[
			"1",
			"sin 90deg",
			"cot 30deg",
			"sqrt(2)/2",
		],
		[
			"sqrt(2)/2",
			"0",
			"cot 45deg",
			"1",
		],
	],
	[
		[
			"sqrt(3)",
			"cos 30deg",
			"sec 30deg",
			"0",
		],
		[
			"cos 60deg",
			"sin 0deg",
			"\\text{undefined}",
			"sqrt(3)/2",
		],
		[
			"sqrt(3)",
			"sqrt(3)/2",
			"tan 45deg",
			"0",
		],
		[
			"1",
			"sqrt(3)/2",
			"sqrt(2)/2",
			"sin 60deg",
		],
	],
	[
		[
			"2sqrt(3)/3",
			"1",
			"1",
			"1/2",
		],
		[
			"cot 0deg",
			"2",
			"1/2",
			"tan 45deg",
		],
		[
			"1",
			"sqrt(3)/3",
			"0",
			"sec 60deg",
		],
		[
			"cos 45deg",
			"sqrt(3)/2",
			"csc 90deg",
			"tan 30deg",
		],
	],
	[
		[
			"cos 0deg",
			"csc 30deg",
			"2",
			"1",
		],
		[
			"sin 30deg",
			"sqrt(2)",
			"sqrt(3)/2",
			"2",
		],
		[
			"tan 0deg",
			"0",
			"0",
			"csc 45deg",
		],
		[
			"1",
			"sqrt(2)/2",
			"1",
			"cos 90deg",
		],
	],
]

for (const row of rows) {
	for (const square of row) {
		for (let i = 0; i < square.length; i++) {
			// convert to LaTeX expression
			square[i] = square[i].replace(/sin|cos|tan|csc|sec|cot/g, "\\$&")
			square[i] = square[i].replace(/deg/g, "^\\circ")

			square[i] = square[i].replace(/sqrt\((\d+)\)/g, "\\sqrt{$1}")
			square[i] = square[i].replace(/(.*)\/(.*)/, "\\frac{$1}{$2}")
		}
	}
}

export default rows
