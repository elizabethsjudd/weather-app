import type { Meta, StoryObj } from "@storybook/react";
import { BsImage } from "react-icons/bs";
import { Card } from "./index";

const meta: Meta<typeof Card> = {
	args: {
		slotTitle: "Optional title",
	},
	argTypes: {
		slotTitle: {
			control: { type: "text" },
		},
	},
	component: Card,
	title: "Reusable/Card",
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
	render: (args) => <Card {...args} slotDetails={<p>More details</p>} slotIcon={<BsImage />} />,
};
