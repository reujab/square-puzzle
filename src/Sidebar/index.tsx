import * as React from "react"
import Directions from "../Directions"
import { Settings } from "../types"

import {
	Button,
	ButtonGroup,
	Card,
	Checkbox,
} from "@blueprintjs/core"

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
					checked={this.props.settings.labelSquares}
					onChange={(e) => this.props.onChange({ ...this.props.settings, labelSquares: (e.target as HTMLInputElement).checked })}
				>
					Label squares
				</Checkbox>

				<Checkbox
					checked={this.props.settings.revealCorner}
					onChange={(e) => this.props.onChange({ ...this.props.settings, revealCorner: (e.target as HTMLInputElement).checked })}
				>
					Reveal one corner
				</Checkbox>

				<ButtonGroup fill={true}>
					<Button onClick={this.props.onGenerate}>Generate</Button>
					<Button onClick={print}>Print</Button>
				</ButtonGroup>

				<Directions settings={this.props.settings} />
			</Card>
		)
	}
}
