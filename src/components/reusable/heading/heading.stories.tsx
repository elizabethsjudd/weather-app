import type { Meta, StoryObj } from "@storybook/react";
import { allowedValues, defaults } from "./constants";
import { Heading } from "./index";

const meta: Meta<typeof Heading> = {
	args: {
		children: "Hello world",
		kind: defaults.kind,
		level: defaults.level,
		size: defaults.size,
	},
	argTypes: {
		children: {
			control: { type: "text" },
		},
		kind: {
			control: { type: "select" },
			options: allowedValues.kinds,
		},
		level: {
			control: { type: "select" },
			options: allowedValues.levels,
		},
		size: {
			control: { type: "select" },
			options: allowedValues.sizes,
		},
	},
	component: Heading,
	title: "Reusable/Heading",
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {
	render: (args) => (
		<>
			<Heading {...args}>{args.children}</Heading>
		</>
	),
};
