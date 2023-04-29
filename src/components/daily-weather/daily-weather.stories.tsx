import type { Meta, StoryObj } from "@storybook/react";
import { DailyWeather } from "./index";
import { WeatherInfo, allowedValues } from "./constants";

const meta: Meta<typeof DailyWeather> = {
	args: {
		dayOfTheWeek: "Today",
		description: "Showers",
		temperature: 0,
		temperatureUnit: "F",
		// @todo need to research more about how Storybook specifically can let us
		// overwrite React props with their new automation
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} as any,
	argTypes: {
		dayOfTheWeek: {
			control: { type: "select" },
			options: allowedValues.days,
		},
		description: {
			control: { type: "text" },
		},
		temperature: {
			control: { type: "number" },
		},
		temperatureUnit: {
			control: { type: "select" },
			options: allowedValues.temperatureUnits,
		},
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} as any,
	component: DailyWeather,
	title: "App components/Daily Weather",
};

export default meta;
type Story = StoryObj<typeof DailyWeather>;

export const Default: Story = {
	render: (args) => (
		<DailyWeather day={{ ...(args as WeatherInfo) }} night={{ ...(args as WeatherInfo) }} />
	),
};
