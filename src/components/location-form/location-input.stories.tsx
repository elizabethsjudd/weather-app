import type { Meta, StoryObj } from "@storybook/react";
import { LocationForm } from "./index";
import { AddressCoordinates } from "./constants";

const meta: Meta<typeof LocationForm> = {
	component: LocationForm,
	title: "App Components/LocationForm",
};

const onChange = (data: AddressCoordinates) => {
	alert(JSON.stringify(data));
};

export default meta;
type Story = StoryObj<typeof LocationForm>;

export const Default: Story = {
	render: () => <LocationForm hookChange={onChange} />,
};
