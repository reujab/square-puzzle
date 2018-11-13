import * as React from "react"
import Puzzle from "./Puzzle"
import ReactDOM from "react-dom"
import Sidebar from "./Sidebar"
import generate from "./generator"
import { Settings } from "./types"

interface State {
	puzzle: string[][][]
	settings: Settings
}

class Index extends React.Component<any, State> {
	constructor(props) {
		super(props)

		const settings = {
			borders: true,
			revealCorner: true,
			shuffle: true,
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
					<Puzzle borders={this.state.settings.borders} rows={this.state.puzzle} />
				</div>
			</React.Fragment>
		)
	}
}

addEventListener("DOMContentLoaded", () => {
	ReactDOM.render(<Index />, document.getElementById("root"))
})

