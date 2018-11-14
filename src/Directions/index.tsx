import * as React from "react"
import { Settings } from "../types"

interface Props {
	settings: Settings
}

export default class Directions extends React.Component<Props> {
	render() {
		return (
			<div className="directions">
				<h2>Directions</h2>
				<p>Cut the following into sixteen squares, and match the trigonometric functions with their respective values.</p>
				<p>Functions may not be matched with other functions, and constants may not be matched with other constants.</p>
				<p>There will be {this.props.settings.revealCorner ? "fourteen" : "sixteen"} unmatched constants around the border of the outer square.</p>
			</div>
		)
	}
}
