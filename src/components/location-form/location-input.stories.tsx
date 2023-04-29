import type { Meta, StoryObj } from "@storybook/react";
import { LocationForm } from "./index";

const meta: Meta<typeof LocationForm> = {
	component: LocationForm,
	title: "App Components/LocationForm",
};

export default meta;
type Story = StoryObj<typeof LocationForm>;

export const Default: Story = {
	render: () => <LocationForm />,
};
