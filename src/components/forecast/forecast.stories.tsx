import type { Meta, StoryObj } from "@storybook/react";
import { Forecast } from "./index";

const meta: Meta<typeof Forecast> = {
	component: Forecast,
	title: "App components/Forecast",
};

export default meta;
type Story = StoryObj<typeof Forecast>;

export const Default: Story = {
	render: () => <Forecast />,
};
