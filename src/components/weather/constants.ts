/**
 * Defines enum values for Input props
 */
export const allowedValues = {
	currentDayDescriptors: [
		"Today",
		"Tonight",
		// Used for things like "This Afternoon"
		"This",
	] as const,
	// @todo - do I need to keep this? I'm only using it for Storybook
	days: [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
		"Sunday Night",
		"Monday Night",
		"Tuesday Night",
		"Wednesday Night",
		"Thursday Night",
		"Friday Night",
		"Saturday Night",
	] as const,
	temperatureUnits: ["F", "C"] as const,
};

export type WeatherDay = (typeof allowedValues.days)[number];
export type WeatherUnit = (typeof allowedValues.temperatureUnits)[number];

/**
 * Weather component configuration options
 */
export interface WeatherConfig {
	day: string;
	description: string;
	// @todo - need to understand this prop more as it feels like it could be derived from
	// the "day" prop given weather.gov's API
	isDaytime: boolean;
	temperature: number;
	temperatureUnit: WeatherUnit;
}
