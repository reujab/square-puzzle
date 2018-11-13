import * as React from "react"
import { Button, Card, Checkbox } from "@blueprintjs/core"

interface Props {
	settings: Settings;
	onChange: (settings: Settings) => void
}

export interface Settings {
	borders: boolean
}

export default class Sidebar extends React.Component<Props> {
	render() {
		return (
			<Card id="sidebar" elevation={4}>
				<Checkbox
					checked={this.props.settings.borders}
					onChange={(e) => this.props.onChange(Object.assign(this.props.settings, { borders: (e.target as HTMLInputElement).checked }))}
				>
					Borders
				</Checkbox>
				<Button fill={true}>Generate</Button>
			</Card>
		)
	}
}
