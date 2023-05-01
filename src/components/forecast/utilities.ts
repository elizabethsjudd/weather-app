import {
	APIError,
	GenericCallbackFunction,
	fetchAPIRequest,
} from "../../foundations/scripts/utilities";
import { ForecastConfig, WeatherGovForecastInfo, WeatherGovLocationInfo } from "./constants";

export const getLocationData = async (
	{ y, x }: ForecastConfig["coordinates"],
	callback: (data: WeatherGovLocationInfo | APIError) => void
): Promise<void> => {
	fetchAPIRequest(`https://api.weather.gov/points/${y},${x}`, callback as GenericCallbackFunction);
};

export const getForecast = async (
	forecastAPI: string,
	callback: (data: WeatherGovForecastInfo | APIError) => void
): Promise<void> => {
	fetchAPIRequest(forecastAPI, callback as GenericCallbackFunction);
};
