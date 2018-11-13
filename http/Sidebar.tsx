import * as React from "react"
import { Button, Card, Checkbox } from "@blueprintjs/core"
import { Settings } from "./interfaces"

interface Props {
	settings: Settings;
	onChange: (settings: Settings) => void
	onGenerate: () => void
}

export default class Sidebar extends React.Component<Props> {
	render() {
		return (
			<Card id="sidebar" elevation={4}>
				<Checkbox
					checked={this.props.settings.borders}
					onChange={(e) => this.props.onChange({ ...this.props.settings, borders: (e.target as HTMLInputElement).checked })}
				>
					Cut outline
				</Checkbox>

				<Checkbox
					checked={this.props.settings.revealCorner}
					onChange={(e) => this.props.onChange({ ...this.props.settings, revealCorner: (e.target as HTMLInputElement).checked })}
				>
					Reveal one corner
				</Checkbox>

				<Button fill={true} onClick={this.props.onGenerate}>Generate</Button>
			</Card>
		)
	}
}
