import { ForecastConfig, WeatherGovForecastInfo, WeatherGovLocationInfo } from "./constants";

export const getLocationData = async (
	{ y, x }: ForecastConfig["coordinates"],
	callback: (data: WeatherGovLocationInfo) => void
): Promise<void> => {
	fetch(`https://api.weather.gov/points/${y},${x}`)
		.then((response) => response.json())
		.then((data) => {
			callback(data);
		});
};

export const getForecast = async (
	forecastAPI: string,
	callback: (data: WeatherGovForecastInfo) => void
): Promise<void> => {
	fetch(forecastAPI)
		.then((response) => response.json())
		.then((data) => {
			callback(data);
		});
};
