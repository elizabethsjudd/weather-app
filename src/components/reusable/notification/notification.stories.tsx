import type { Meta, StoryObj } from "@storybook/react";
import { Notification } from "./index";
import { allowedValues, defaults } from "./constants";

const meta: Meta<typeof Notification> = {
	args: {
		children: "Notification message",
		title: "Hello",
		kind: defaults.kind,
	},
	argTypes: {
		children: {
			control: { type: "text" },
		},
		title: {
			control: { type: "text" },
		},
		kind: {
			control: { type: "select" },
			options: allowedValues.kinds,
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
