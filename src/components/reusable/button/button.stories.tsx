import type { Meta, StoryObj } from "@storybook/react";
import { allowedValues, defaults } from "./constants";
import { BsSearch } from "react-icons/bs";
import { Button } from "./index";

const meta: Meta<typeof Button> = {
	args: {
		kind: defaults.kind,
		text: "Button",
	},
	argTypes: {
		kind: {
			control: { type: "select" },
			options: allowedValues.kinds,
		},
		text: {
			control: { type: "text" },
		},
	},
	component: Button,
	title: "Reusable/Button",
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
	render: (args) => <Button {...args} slotIcon={<BsSearch />} />,
};
