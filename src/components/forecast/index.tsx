import * as React from "react";
import {
	DailyWeatherConfigConstructor,
	ForecastConfig,
	WeatherGovForecastInfo,
	WeatherGovLocationInfo,
} from "./constants";
import { Heading, Notification } from "../reusable/";
import { getForecast, getLocationData } from "./utilities";
import { DailyWeather } from "../daily-weather";
import { DailyWeatherConfig } from "../daily-weather/constants";
import { isCurrentDay } from "../daily-weather/utilities";
import styles from "./forecast.module.scss";

/**
 * Component that uses the weather.gov API to pull the forecast for a given location
 * --------------------------------------------------
 */
export const Forecast = ({ coordinates, hookUpdate, testId }: ForecastConfig): JSX.Element => {
	const defaultWeatherArray: Array<DailyWeatherConfigConstructor> = [];
	const defaultAPIError = "";

	const [futureForecast, setFutureForecast] = React.useState(defaultWeatherArray);
	const [currentWeather, setCurrentWeather] = React.useState(defaultWeatherArray);
	const [apiError, setAPIError] = React.useState(defaultAPIError);

	React.useEffect(() => {
		if (coordinates.y !== 0 && coordinates.x !== 0) {
			getLocationData(coordinates, async (locationData) => {
				const locData = locationData as WeatherGovLocationInfo;
				if (!locData.status) {
					hookUpdate &&
						hookUpdate({
							location: `${locData.properties.relativeLocation.properties.city}, ${locData.properties.relativeLocation.properties.state}`,
						});

					getForecast(locData.properties.forecast, (forecastData) => {
						setCurrentWeather([]);
						setFutureForecast([]);

						let dayObject = new Object({}) as DailyWeatherConfigConstructor;
						(forecastData as WeatherGovForecastInfo).properties.periods.forEach((period) => {
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
				} else {
					hookUpdate && hookUpdate({ location: "" });
					setAPIError(`${locData.status} status error with data base`);
				}
			});
		} else {
			hookUpdate && hookUpdate({ location: "" });
			setAPIError("There was an issue connecting to the data base");
		}
	}, [coordinates, hookUpdate]);

	const getWeatherCards = (weatherArray: Array<DailyWeatherConfig>, isCurrent = false) => {
		const opAttrs: { testId?: string } = {};

		return weatherArray.map((period, index) => {
			if (testId) {
				opAttrs["testId"] = `${testId}-${isCurrent ? "current" : "future"}`;
			}
			return <DailyWeather key={index} {...period} {...opAttrs} />;
		});
	};

	if (apiError !== "") {
		return (
			<Notification kind="error" title="Error">
				{apiError}
			</Notification>
		);
	}

	if (coordinates.y === 0 && coordinates.x === 0) {
		return (
			<Notification kind="info" title="No forecast">
				Enter an address to find the current forecast
			</Notification>
		);
	}

	return (
		<>
			{getWeatherCards(currentWeather as DailyWeatherConfig[], true)}
			{futureForecast.length > 0 && (
				<Heading kind="headline" level={3}>
					Upcoming forecast
				</Heading>
			)}
			<div className={styles.futureForecast}>
				{getWeatherCards(futureForecast as DailyWeatherConfig[])}
			</div>
		</>
	);
};
