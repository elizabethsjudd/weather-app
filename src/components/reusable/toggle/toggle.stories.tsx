import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "../label";
import { Toggle } from "./index";

const meta: Meta<typeof Toggle> = {
	component: Toggle,
	title: "Reusable/Toggle",
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
	render: () => (
		<>
			<Label attrs={{ htmlFor: "meow" }}>Label</Label>
			<Toggle attrs={{ defaultValue: "cat", id: "meow", name: "pet-selector" }}></Toggle>
		</>
	),
};
