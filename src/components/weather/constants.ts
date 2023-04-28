/**
 * Defines enum values for Input props
 */
export const allowedValues = {
	days: [
		"Today",
		"Tonight",
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
	day: WeatherDay;
	description: string;
	isDaytime: boolean;
	temperature: number;
	temperatureUnit: WeatherUnit;
}
