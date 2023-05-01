import type { Meta, StoryObj } from "@storybook/react";
import { Notification } from "./index";
import { allowedValues, defaults } from "./constants";

const meta: Meta<typeof Notification> = {
	args: {
		children: "Notification message",
		kind: defaults.kind,
		title: "Hello",
	},
	argTypes: {
		children: {
			control: { type: "text" },
		},
		kind: {
			control: { type: "select" },
			options: allowedValues.kinds,
		},
		title: {
			control: { type: "text" },
		},
	},
	component: Notification,
	title: "Reusable/Notification",
};

export default meta;
type Story = StoryObj<typeof Notification>;

export const Default: Story = {
	render: (args) => (
		<>
			<Notification {...args}>{args.children}</Notification>
		</>
	),
};
