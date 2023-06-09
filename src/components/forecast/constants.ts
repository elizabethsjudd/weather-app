import { DayOfTheWeek, TempUnit, WeatherInfo } from "../daily-weather/constants";
import { AddressCoordinates } from "../location-form/constants";

export interface hookUpdateLocationConfig {
	location: `${string}, ${string}` | "";
}

export interface ForecastConfig {
	coordinates: AddressCoordinates;
	hookUpdateLocation?: ({ location }: hookUpdateLocationConfig) => void;
	testId?: string;
}

export interface DailyWeatherConfigConstructor {
	day?: WeatherInfo;
	night?: WeatherInfo;
}

/**
 * weather.gov's APIs
 * --------------------------------------------------
 */
export interface WeatherGovWeatherInfo {
	name: DayOfTheWeek;
	shortForecast: string;
	temperature: number;
	temperatureUnit: TempUnit;
}

export interface WeatherGovLocationInfo {
	properties: {
		forecast: string;
		relativeLocation: {
			properties: {
				city: string;
				state: string;
			};
		};
	};
	status?: number;
}

export interface WeatherGovForecastInfo {
	properties: {
		periods: Array<WeatherGovWeatherInfo>;
	};
	status?: number;
}
