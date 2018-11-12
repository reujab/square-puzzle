import * as React from "react"
import Puzzle from "./Puzzle"
import ReactDOM from "react-dom"
import original from "./original"

class Index extends React.Component {
	render() {
		return <Puzzle rows={original} />
	}
}

addEventListener("DOMContentLoaded", () => {
	ReactDOM.render(<Index />, document.getElementById("root"))
})

