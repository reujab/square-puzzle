import * as React from "react"
import Puzzle from "./Puzzle"
import ReactDOM from "react-dom"
import Sidebar, { Settings } from "./Sidebar"
import generate from "./generator"

interface State {
	puzzle: string[][][]
	settings: Settings
}

class Index extends React.Component<any, State> {
	constructor(props) {
		super(props)

		this.state = {
			puzzle: generate(),
			settings: {
				borders: true,
			},
		}
	}

	render() {
		return (
			<React.Fragment>
				<Sidebar
					settings={this.state.settings}
					onChange={(settings) => this.setState({ settings })}
					onGenerate={() => this.setState({ puzzle: generate() })}
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

