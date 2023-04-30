import * as React from "react";
import { DailyWeather } from "../daily-weather";
import { DailyWeatherConfig } from "../daily-weather/constants";
import { isCurrentDay } from "../daily-weather/utilities";
import { Heading } from "../reusable/heading";
import {
	DailyWeatherConfigConstructor,
	ForecastConfig,
	WeatherGovForecastInfo,
	WeatherGovLocationInfo,
} from "./constants";
import { getLocationData, getForecast } from "./utilities";
import styles from "./styles.module.scss";

/**
 * Component that uses the weather.gov API to pull the forecast for a given location
 * --------------------------------------------------
 */
export const Forecast = ({ coordinates, hookUpdate }: ForecastConfig): JSX.Element => {
	const defaultWeatherArray: Array<DailyWeatherConfigConstructor> = [];

	const [futureForecast, setFutureForecast] = React.useState(defaultWeatherArray);
	const [currentWeather, setCurrentWeather] = React.useState(defaultWeatherArray);

	React.useEffect(() => {
		console.log(coordinates);
		if (coordinates) {
			getLocationData(coordinates, async (locData: WeatherGovLocationInfo) => {
				hookUpdate &&
					hookUpdate({
						location: `${locData.properties.relativeLocation.properties.city}, ${locData.properties.relativeLocation.properties.state}`,
					});

				getForecast(locData.properties.forecast, (forecastData: WeatherGovForecastInfo) => {
					setCurrentWeather([]);
					setFutureForecast([]);

					let dayObject = new Object({}) as DailyWeatherConfigConstructor;
					forecastData.properties.periods.forEach((period) => {
						const currentPeriod = period.name.toLowerCase().includes("night") ? "night" : "day";

						dayObject[currentPeriod] = {
							dayOfTheWeek: period.name,
							description: period.shortForecast,
							temperature: period.temperature,
							temperatureUnit: period.temperatureUnit,
						};

						if (currentPeriod === "night") {
							const currentDayObject = Object.assign({}, dayObject);

							if (isCurrentDay(period.name)) {
								setCurrentWeather((prevArray) => [
									...prevArray,
									Object.assign({}, currentDayObject),
								]);
							} else {
								setFutureForecast((prevArray) => [
									...prevArray,
									Object.assign({}, currentDayObject),
								]);
							}

							dayObject = new Object({});
						}
					});
				});
			});
		}
	}, [coordinates, hookUpdate]);

	const getWeatherCards = (weatherArray: Array<DailyWeatherConfig>) => {
		return weatherArray.map((period, index) => <DailyWeather key={index} {...period} />);
	};

	return (
		<div style={{ width: "100%" }}>
			{getWeatherCards(currentWeather as DailyWeatherConfig[])}
			<Heading kind="headline" size="large">
				Upcoming forecast
			</Heading>
			<div className={styles.futureForecast}>
				{getWeatherCards(futureForecast as DailyWeatherConfig[])}
			</div>
		</div>
	);
};
