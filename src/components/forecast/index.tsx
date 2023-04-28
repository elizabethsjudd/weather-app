import * as React from "react";
import { Weather } from "../weather";
import { BsGeoFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import { WeatherDay, WeatherUnit } from "../weather/constants";
import { isCurrentDay } from "../weather/utilities";

/**
 * weather.gov's APIs
 * --------------------------------------------------
 */
export interface WeatherInformation {
	isDaytime: boolean;
	name: WeatherDay;
	shortForecast: string;
	temperature: number;
	temperatureUnit: WeatherUnit;
}

interface LocationInformation {
	properties: {
		forecast: string;
		relativeLocation: {
			properties: {
				city: string;
				state: string;
			};
		};
	};
}

interface ForecastInformation {
	properties: {
		periods: Array<WeatherInformation>;
	};
}

/**
 * Component that uses the weather.gov API to pull the forecast for a given location
 * --------------------------------------------------
 */
export const Forecast = (): JSX.Element => {
	const weatherArray: Array<WeatherInformation> = [];

	const [city, setCity] = React.useState("");
	const [state, setState] = React.useState("");
	const [futureForecast, setFutureForecast] = React.useState(weatherArray);
	const [currentWeather, setCurrentWeather] = React.useState(weatherArray);

	const getLocationData = async (callback: (data: LocationInformation) => void): Promise<void> => {
		fetch("https://api.weather.gov/points/39.7456,-97.0892")
			.then((response) => response.json())
			.then((data) => {
				callback(data);
			});
	};

	const getForecast = async (
		forecastAPI: string,
		callback: (data: ForecastInformation) => void
	): Promise<void> => {
		fetch(forecastAPI)
			.then((response) => response.json())
			.then((data) => {
				callback(data);
			});
	};

	const initApplication = async () => {
		await getLocationData(async (data: LocationInformation) => {
			setCity(data?.properties?.relativeLocation?.properties.city);
			setState(data?.properties?.relativeLocation?.properties.state);

			await getForecast(data.properties.forecast, (foo) => {
				setCurrentWeather([]);
				setFutureForecast([]);
				foo.properties.periods.forEach((period) => {
					if (isCurrentDay(period.name)) {
						setCurrentWeather((prevArray) => [...prevArray, period]);
					} else {
						setFutureForecast((prevArray) => [...prevArray, period]);
					}
				});
			});
		});
	};

	React.useEffect(() => {
		initApplication();
	});

	return (
		<div>
			<div>
				<h2>Location</h2>
				<IconContext.Provider value={{ size: "3rem" }}>
					<BsGeoFill />
				</IconContext.Provider>
				{city}, {state}
			</div>
			<h2>Current</h2>
			{currentWeather.map((period, index) => (
				// We re-map a few API props for clarity within the component
				<Weather day={period.name} description={period.shortForecast} {...period} key={index} />
			))}
			<h2>Future</h2>
			{futureForecast.map((period, index) => (
				<Weather day={period.name} description={period.shortForecast} {...period} key={index} />
			))}
		</div>
	);
};
