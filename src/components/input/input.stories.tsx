// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";
import { BsSearch } from "react-icons/bs";

import { Input } from "./index";
import { allowedValues } from "./constants";

const meta: Meta<typeof Input> = {
	args: {
		placeholder: "Search",
		type: "search",
	},
	argTypes: {
		placeholder: {
			control: { type: "text" },
		},
		type: {
			control: { type: "select" },
			options: allowedValues.types,
		},
	},
	component: Input,
	title: "Form elements/Input",
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
	render: (args) => <Input {...args} slotPersistentIcon={<BsSearch />} />,
};
