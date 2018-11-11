import * as React from "react"
import Square from "./Square"

export default class Puzzle extends React.Component {
	render() {
		return (
			<table>
				<tbody>
					<tr>
						<Square
							top="0"
							right="\csc 45^\circ"
							bottom="\tan 0^\circ"
							left="0"
						/>
						<Square
							top="\frac{\sqrt{2}}{2}"
							right="1"
							bottom="\cos 90^\circ"
							left="1"
						/>
						<Square
							top="\sqrt{2}"
							right="\frac{\sqrt{3}}{2}"
							bottom="2"
							left="\sin 30^\circ"
						/>
						<Square
							top="\cos 60^\circ"
							right="\sin 0^\circ"
							bottom="\text{undefined}"
							left="\frac{\sqrt{3}}{2}"
						/>
					</tr>
					<tr>
						<Square
							top="\frac{\sqrt{3}}{2}"
							right="\frac{\sqrt{2}}{2}"
							bottom="\sin 60^\circ"
							left="1"
						/>
						<Square
							top="\frac{\sqrt{3}}{2}"
							right="\csc 90^\circ"
							bottom="\tan 30^\circ"
							left="\cos 45^\circ"
						/>
						<Square
							top="\frac{\sqrt{3}}{2}"
							right="\sec 45^\circ"
							bottom="\tan 60^\circ"
							left="\frac{\sqrt{2}}{2}"
						/>
						<Square
							top="\cot 0^\circ"
							right="2"
							bottom="\frac{1}{2}"
							left="\tan 45^\circ"
						/>
					</tr>
					<tr>
						<Square
							top="\sin 45^\circ"
							right="\frac{1}{2}"
							bottom="\sqrt{2}"
							left="1"
						/>
						<Square
							top="\frac{1}{2}"
							right="\frac{2\sqrt{3}}{3}"
							bottom="1"
							left="1"
						/>
						<Square
							top="0"
							right="\sqrt{3}"
							bottom="\cos 30^\circ"
							left="\sec 30^\circ"
						/>
						<Square
							top="1"
							right="\frac{\sqrt{2}}{2}"
							bottom="0"
							left="\cot 45^\circ"
						/>
					</tr>
					<tr>
						<Square
							top="\frac{\sqrt{3}}{3}"
							right="0"
							bottom="\sec 60^\circ"
							left="1"
						/>
						<Square
							top="\cot 30^\circ"
							right="\frac{\sqrt{2}}{2}"
							bottom="1"
							left="\sin 90^\circ"
						/>
						<Square
							top="0"
							right="\sqrt{3}"
							bottom="\frac{\sqrt{3}}{2}"
							left="\tan 45^\circ"
						/>
						<Square
							top="\csc 30^\circ"
							right="2"
							bottom="1"
							left="\cos 0^\circ"
						/>
					</tr>
				</tbody>
			</table>
		)
	}
}
