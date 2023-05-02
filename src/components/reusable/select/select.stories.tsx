import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "../label";
import { Select } from "./index";
import { SelectOption } from "../select-option";

const meta: Meta<typeof Select> = {
	component: Select,
	title: "Reusable/Select",
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
	render: () => (
		<>
			<Label attrs={{ htmlFor: "meow" }}>Label</Label>
			<Select attrs={{ defaultValue: "cat", id: "meow", name: "pet-selector" }}>
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
