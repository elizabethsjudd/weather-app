import type { Meta, StoryObj } from "@storybook/react";

import { Label } from "./index";

const meta: Meta<typeof Label> = {
	args: {
		children: "Label for input meow",
		htmlFor: "meow",
	},
	argTypes: {
		children: {
			control: { type: "text" },
		},
		htmlFor: {
			control: { type: "text" },
		},
	},
	component: Label,
	title: "Reusable/Label",
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
	render: (args) => (
		<>
			<Label htmlFor={args.htmlFor}>{args.children}</Label>
			<input type="text" id={args.htmlFor} />
		</>
	),
};
