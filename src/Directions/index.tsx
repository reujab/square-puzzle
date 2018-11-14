import * as React from "react"
import { iPuzzle } from "../types"

interface Props {
	heading: string
	puzzle: iPuzzle
}

export default class Directions extends React.Component<Props> {
	render() {
		return (
			<div className="directions">
				<h2>{this.props.heading}</h2>
				<p>Cut the following into sixteen squares, and match the trigonometric functions with their respective values.</p>
				<p>Functions may not be matched with other functions, and constants may not be matched with other constants.</p>
				<p>There will be {this.props.puzzle.revealedCorner ? "fourteen" : "sixteen"} unmatched constants around the border of the outer square.</p>
			</div>
		)
	}
}
