import * as React from "react"
import Puzzle from "./Puzzle"
import ReactDOM from "react-dom"
import Sidebar from "./Sidebar"
import generate from "./generator"
import { Button, ButtonGroup } from "@blueprintjs/core"
import { iPuzzle, Settings } from "./types"

interface State {
	puzzle: iPuzzle
	settings: Settings
}

class Index extends React.Component<any, State> {
	constructor(props) {
		super(props)

		const settings = {
			borders: true,
			labelSquares: true,
			revealCorner: true,

			shuffled: true,
		}

		this.state = {
			puzzle: generate(settings),
			settings,
		}
	}

	render() {
		return (
			<React.Fragment>
				<Sidebar
					settings={this.state.settings}
					onChange={(settings) => this.setState({ settings })}
					onGenerate={() => this.setState({ puzzle: generate(this.state.settings) })}
				/>
				<div id="content">
					<div id="puzzle-wrapper">
						<Puzzle settings={this.state.settings} puzzle={this.state.puzzle} />
					</div>
					<div id="shuffle-toggle">
						<ButtonGroup>
							<Button active={this.state.settings.shuffled} onClick={() => this.setState({ settings: { ...this.state.settings, shuffled: true } })}>Shuffled</Button>
							<Button active={!this.state.settings.shuffled} onClick={() => this.setState({ settings: { ...this.state.settings, shuffled: false } })}>Solved</Button>
						</ButtonGroup>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

addEventListener("DOMContentLoaded", () => {
	ReactDOM.render(<Index />, document.getElementById("root"))
})

