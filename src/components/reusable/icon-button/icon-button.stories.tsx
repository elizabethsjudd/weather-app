import type { Meta, StoryObj } from "@storybook/react";
// import { allowedValues, defaults } from "./constants";
import { BsSearch } from "react-icons/bs";
import { IconButton } from "./index";

const meta: Meta<typeof IconButton> = {
	args: {
		text: "Icon Button",
	},
	argTypes: {
		text: {
			control: { type: "text" },
		},
	},
	component: IconButton,
	title: "Reusable/Icon Button",
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
	render: (args) => (
		<div style={{ margin: "7rem" }}>
			<IconButton {...args} slotIcon={<BsSearch />} />
		</div>
	),
};
