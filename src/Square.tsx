import * as React from "react"
import ReactDOM from "react-dom"
import { InlineMath } from "react-katex"

interface Props {
	num: number,
	top: string,
	right: string,
	bottom: string,
	left: string,
}

export default class Square extends React.Component<Props> {
	componentDidMount() {
		this.fix()
	}

	componentDidUpdate() {
		this.fix()
	}

	fix() {
		// fixes position of left and right edges
		const tr = ReactDOM.findDOMNode(this) as HTMLElement
		// selects the rotated div in .left and .right
		const parents = tr.querySelectorAll(".left, .right") as unknown as HTMLCollectionOf<HTMLElement>
		for (const parent of parents) {
			// sets the parent's (.left's or .right's) width to the rotated child div's height, which is really its displayed width
			// FIXME after KaTeX fixes the rendering issue
			const child = parent.querySelector("div")
			parent.style.width = `${child.clientHeight}px`
		}
	}

	render() {
		return (
			<td>
				<div className="num">{this.props.num}</div>
				<div className="top">
					<InlineMath>{this.props.top}</InlineMath>
				</div>
				<div className="right">
					<div>
						<InlineMath>{this.props.right}</InlineMath>
					</div>
				</div>
				<div className="bottom">
					<InlineMath>{this.props.bottom}</InlineMath>
				</div>
				<div className="left">
					<div>
						<InlineMath>{this.props.left}</InlineMath>
					</div>
				</div>
			</td>
		)
	}
}
