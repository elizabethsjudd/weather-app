import { DayOfTheWeek, WeatherInfo, allowedValues } from "./constants";
import type { Meta, StoryObj } from "@storybook/react";
import { DailyWeather } from "./index";

interface StoryConfig extends Omit<WeatherInfo, "dayOfTheWeek"> {
	dayOfTheWeek: `${DayOfTheWeek} / ${DayOfTheWeek}`;
}

const meta: Meta<StoryConfig> = {
	args: {
		dayOfTheWeek: "Today / Tonight",
		description: "Showers",
		temperature: 0,
		temperatureUnit: "F",
	},
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
	},
	parameters: {
		a11y: {
			config: {
				rules: [
					{
						// This is a violation within React Icon
						id: "duplicate-id",
						selector: "svg",
					},
				],
			},
			element: "#storybook-root",
			manual: true,
			options: {},
		},
	},
	title: "App components/Daily Weather",
};

export default meta;
type Story = StoryObj<StoryConfig>;

export const Default: Story = {
	render: (args) => {
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

		return <DailyWeather day={day as WeatherInfo} night={night as WeatherInfo} />;
	},
};
