import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./index";
import { SelectOption } from "../select-option";
import { Label } from "../label";

const meta: Meta<typeof Select> = {
	component: Select,
	title: "Reusable/Select",
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
	render: () => (
		<>
			<Label htmlFor="meow">Label</Label>
			<Select attrs={{name:'pet-selector', defaultValue: 'cat', id: 'meow'}}>
				<>
					<SelectOption attrs={{value: 'dog'}}>Dog</SelectOption>
					<SelectOption attrs={{value: 'cat'}}>Cat</SelectOption>
					<SelectOption attrs={{value: 'bird'}}>Bird</SelectOption>
					<SelectOption attrs={{value: 'turtle'}}>Turtle</SelectOption>
				</>
			</Select>
		</>
	),
};
