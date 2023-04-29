import type { Meta, StoryObj } from "@storybook/react";
import { BsSearch } from "react-icons/bs";

import { Button } from "./index";
import { allowedValues, defaults } from "./constants";

const meta: Meta<typeof Button> = {
	args: {
		text: "Button",
		type: defaults.type,
		kind: defaults.kind,
	},
	argTypes: {
		text: {
			control: { type: "text" },
		},
		type: {
			control: { type: "select" },
			options: allowedValues.types,
		},
		kind: {
			control: { type: "select" },
			options: allowedValues.kinds,
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
