import type { Meta, StoryObj } from "@storybook/react";
import { Weather } from "./index";
import { allowedValues } from "./constants";

const meta: Meta<typeof Weather> = {
	args: {
		day: "Today",
		description: "Showers",
		isDaytime: true,
		temperature: 0,
		temperatureUnit: "F",
	},
	argTypes: {
		day: {
			control: { type: "select" },
			options: allowedValues.days,
		},
		description: {
			control: { type: "text" },
		},
		isDaytime: {
			control: { type: "boolean" },
		},
		temperature: {
			control: { type: "number" },
		},
		temperatureUnit: {
			control: { type: "select" },
			options: allowedValues.temperatureUnits,
		},
	},
	component: Weather,
	title: "App components/Weather",
};

export default meta;
type Story = StoryObj<typeof Weather>;

export const Default: Story = {
	render: (args) => <Weather {...args} />,
};
