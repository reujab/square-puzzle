import * as React from "react"
import Square from "./Square"

interface Props {
	rows: string[][][]
}

interface State {
	rows: Square[][][]
}

export default class Puzzle extends React.Component<Props, State> {
	constructor(props) {
		super(props)

		let squares = 0
		const rows = Object.assign([], props.rows)
		for (const row of rows) {
			for (let i = 0; i < row.length; i++) {
				squares++
				row[i] = (
					<Square
						key={squares}
						num={squares}
						top={row[i][0]}
						right={row[i][1]}
						bottom={row[i][2]}
						left={row[i][3]}
					/>
				)
			}
		}
		this.state = { rows }
	}

	render() {
		return (
			<table>
				<tbody>
					<tr>
						{this.state.rows[0]}
					</tr>
					<tr>
						{this.state.rows[1]}
					</tr>
					<tr>
						{this.state.rows[2]}
					</tr>
					<tr>
						{this.state.rows[3]}
					</tr>
				</tbody>
			</table>
		)
	}
}
