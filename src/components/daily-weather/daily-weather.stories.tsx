import type { Meta, StoryObj } from "@storybook/react";
import { DailyWeather } from "./index";
import { DailyWeatherConfig, DayOfTheWeek, WeatherInfo, allowedValues } from "./constants";

interface StoryConfig extends Omit<WeatherInfo, "dayOfTheWeek">, DailyWeatherConfig {
	dayOfTheWeek: `${DayOfTheWeek} / ${DayOfTheWeek}`;
}

const meta: Meta<typeof DailyWeather> = {
	args: {
		dayOfTheWeek: "Today / Tonight",
		description: "Showers",
		temperature: 0,
		temperatureUnit: "F",
	} as StoryConfig,
	argTypes: {
		dayOfTheWeek: {
			control: { type: "select" },
			options: [
				"Today / Tonight",
				"This Afternoon / Tonight",
				"Tonight",
				"Sunday / Sunday Night",
				"Monday / Monday Night",
				"Tuesday / Tuesday Night",
				"Wednesday / Wednesday Night",
				"Thursday / Thursday Night",
				"Friday / Friday Night",
				"Saturday / Saturday Night",
			],
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
		// @todo need to research how Storybook specifically can let us
		// overwrite React props with their automation
	} as any,
	component: DailyWeather,
	title: "App components/Daily Weather",
};

export default meta;
type Story = StoryObj<typeof DailyWeather>;

export const Default: Story = {
	render: (args: any) => {
		const labels = args.dayOfTheWeek.split(" / ");
		const consistentArgs = {
			description: args.description,
			temperature: args.temperature,
			temperatureUnit: args.temperatureUnit,
		};

		let day = undefined;

		if (labels.length === 2) {
			day = Object.assign({}, consistentArgs, {
				dayOfTheWeek: labels[0],
			});
		}

		const night = Object.assign({}, consistentArgs, {
			// When it's night only, there isn't a second label so we need to pull the first one instead
			dayOfTheWeek: labels[1] || labels[0],
		});

		return <DailyWeather day={day} night={night} />;
	},
};
