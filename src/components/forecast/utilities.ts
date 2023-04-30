import { LatLongCoordinates, WeatherGovForecastInfo, WeatherGovLocationInfo } from "./constants";

export const getLocationData = async (
	{ y, x }: LatLongCoordinates,
	callback: (data: WeatherGovLocationInfo) => void
): Promise<void> => {
	console.log("coordinates", { x, y });
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
