/**
 * Defines enum values for Daily Weather component
 */
export const allowedValues = {
	currentDayDescriptors: [
		"Today",
		"Tonight",
		// Used for things like "This Afternoon"
		"This",
	] as const,
	// @todo - do I need to keep this? I'm only using it for Storybook
	days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] as const,
	temperatureUnits: ["F", "C"] as const,
};

export type DayOfTheWeek = (typeof allowedValues.days)[number];
export type TempUnit = (typeof allowedValues.temperatureUnits)[number];

/** Weather information for a given time of day */
export interface WeatherInfo {
	dayOfTheWeek?: string;
	description?: string;
	temperature?: number;
	temperatureUnit?: TempUnit;
}

/**
 * Daily Weather component configuration options
 */
export interface DailyWeatherConfig {
	day: WeatherInfo;
	night: WeatherInfo;
}
