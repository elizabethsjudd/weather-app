import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "./index";
import { allowedValues, defaults } from "./constants";

const meta: Meta<typeof Heading> = {
	args: {
		level: defaults.level,
		kind: defaults.kind,
		size: defaults.size,
		children: <>Hello world</>,
	},
	argTypes: {
		level: {
			control: { type: 'select' },
			options: allowedValues.levels
		},
		kind: {
			control: { type: 'select' },
			options: allowedValues.kinds
		},
		size: {
			control: { type: 'select' },
			options: allowedValues.sizes
		},
		children: {
			control: { type: 'text' },
		},
	},
	component: Heading,
	title: "Reusable/Heading",
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {
	render: (args) => <>
		<Heading {...args}><>{args.children}</></Heading>
	</>,
};
