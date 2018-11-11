import * as React from "react"
import ReactDOM from "react-dom"
import Puzzle from "./Puzzle"

class Index extends React.Component {
	render() {
		return <Puzzle />
	}
}

addEventListener("DOMContentLoaded", () => {
	ReactDOM.render(<Index />, document.getElementById("root"))
})

