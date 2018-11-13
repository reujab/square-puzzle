import * as React from "react"
import Puzzle from "./Puzzle"
import ReactDOM from "react-dom"
import Sidebar, { Settings } from "./Sidebar"
import generate from "./generator"

interface State {
	settings: Settings
}

class Index extends React.Component<any, State> {
	constructor(props) {
		super(props)

		this.state = {
			settings: {
				borders: true,
			},
		}
	}

	render() {
		return (
			<React.Fragment>
				<Sidebar settings={this.state.settings} onChange={(settings) => this.setState({ settings })} />
				<div id="content">
					<Puzzle borders={this.state.settings.borders} rows={generate()} />
				</div>
			</React.Fragment>
		)
	}
}

addEventListener("DOMContentLoaded", () => {
	ReactDOM.render(<Index />, document.getElementById("root"))
})

