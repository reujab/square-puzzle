import * as React from "react"
import Square from "./Square"
import _ from "lodash"
import { iPuzzle, Settings } from "./types"

interface Props {
	settings: Settings
	puzzle: iPuzzle
}

export default class Puzzle extends React.Component<Props> {
	static puzzleToDOM(puzzle: string[][][]) {
		let squares = 0

		return puzzle.map((row) => row.map((square) => {
			squares++
			return (
				<Square
					key={squares}
					num={squares}
					top={square[0]}
					right={square[1]}
					bottom={square[2]}
					left={square[3]}
				/>
			)
		}))
	}

	render() {
		const rows = Puzzle.puzzleToDOM(this.props.puzzle[this.props.settings.shuffled ? "shuffled" : "solved"])

		const classes = _.compact([
			this.props.settings.borders && "border",
			this.props.settings.labelSquares && "label",
		]).join(" ")

		return (
			<table className={classes}>
				<tbody>
					<tr>{rows[0]}</tr>
					<tr>{rows[1]}</tr>
					<tr>{rows[2]}</tr>
					<tr>{rows[3]}</tr>
				</tbody>
			</table>
		)
	}
}
