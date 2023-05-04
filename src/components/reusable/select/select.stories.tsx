import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "../label";
import { Select } from "./index";
import { SelectOption } from "../select-option";
import { action } from "@storybook/addon-actions";


const meta: Meta<typeof Select> = {
	component: Select,
	title: "Reusable/Select",
};

const handleChange = (value: string) => {
	console.log(`select changed value: ${value}`);
	// @todo - figure out why SB actions is not displaying the information
	action(`select changed value`);
}

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
	render: () => (
		<>
			<Label attrs={{ htmlFor: "meow" }}>Label</Label>
			<Select attrs={{ defaultValue: "cat", id: "meow", name: "pet-selector" }} hookChange={handleChange}>
				<>
					<SelectOption attrs={{ value: "dog" }}>Dog</SelectOption>
					<SelectOption attrs={{ value: "cat" }}>Cat</SelectOption>
					<SelectOption attrs={{ value: "bird" }}>Bird</SelectOption>
					<SelectOption attrs={{ value: "turtle" }}>Turtle</SelectOption>
				</>
			</Select>
		</>
	),
};
