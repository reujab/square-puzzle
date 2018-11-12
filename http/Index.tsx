import * as React from "react"
import Puzzle from "./Puzzle"
import ReactDOM from "react-dom"
import generate from "./generator"

class Index extends React.Component {
	render() {
		return <Puzzle rows={generate()} />
	}
}

addEventListener("DOMContentLoaded", () => {
	ReactDOM.render(<Index />, document.getElementById("root"))
})

