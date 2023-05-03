import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "../label";
import { Toggle } from "./index";
import { ToggleConfig } from "./constants";
import { action } from "@storybook/addon-actions";

const meta: Meta<ToggleConfig["labels"]> = {
	args: {
		off: "Off",
		on: "On",
	},
	argTypes: {
		off: {
			control: { type: "text" },
		},
		on: {
			control: { type: "text" },
		},
	},
	title: "Reusable/Toggle",
};

export default meta;
type Story = StoryObj<ToggleConfig["labels"]>;

export const Default: Story = {
	render: (args) => (
		<>
			<Label attrs={{ htmlFor: "meow" }}>Label</Label>
			<Toggle
				attrs={{ id: "meow" }}
				hookChange={action("toggle changed value")}
				labels={{ off: args.off, on: args.on }}
			></Toggle>
		</>
	),
};
