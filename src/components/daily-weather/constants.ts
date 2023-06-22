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
	temperatureUnits: ["F", "C"] as const,
};
export type DayOfTheWeek = `${
	| "Today"
	| "Tonight"
	| "This"
	| "Sunday"
	| "Monday"
	| "Tuesday"
	| "Wednesday"
	| "Thursday"
	| "Friday"
	| "Saturday"}${"" | " Afternoon" | " Night"}`;
export type TempUnit = (typeof allowedValues.temperatureUnits)[number];

/** Weather information for a given time of day */
export interface WeatherInfo {
	dayOfTheWeek: DayOfTheWeek;
	description: string;
	details: string;
	humidity: number;
	precipitationProbability: number;
	temperature: number;
	temperatureUnit: TempUnit;
	windDirection: string;
	windSpeed: string;
}

/**
 * Daily Weather component configuration options
 */
export interface DailyWeatherConfig {
	day?: WeatherInfo;
	night: WeatherInfo;
	testId?: string;
}
