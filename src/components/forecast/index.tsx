import * as React from "react";
import { DailyWeather } from "../daily-weather";
import { BsGeoFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import { DayOfTheWeek, TempUnit } from "../daily-weather/constants";
import { isCurrentDay } from "../daily-weather/utilities";
import { Heading } from "../reusable/heading";
import { LocationContext } from "@/context/location";

/**
 * weather.gov's APIs
 * --------------------------------------------------
 */
export interface WeatherInformation {
	isDaytime: boolean;
	name: DayOfTheWeek;
	shortForecast: string;
	temperature: number;
	temperatureUnit: TempUnit;
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

interface foo {
	day?: WeatherInformation;
	night?: WeatherInformation;
}

/**
 * Component that uses the weather.gov API to pull the forecast for a given location
 * --------------------------------------------------
 */
export const Forecast = (): JSX.Element => {
	const { coordinates, setName } = React.useContext(LocationContext);

	const weatherArray: Array<foo> = [];

	// const [city, setCity] = React.useState("");
	// const [state, setState] = React.useState("");
	const [futureForecast, setFutureForecast] = React.useState(weatherArray);
	const [currentWeather, setCurrentWeather] = React.useState(weatherArray);

	const getLocationData = async (callback: (data: LocationInformation) => void): Promise<void> => {
		fetch(`https://api.weather.gov/points/${coordinates.y},${coordinates.x}`)
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
			setName(`${data?.properties?.relativeLocation?.properties.city}, ${data?.properties?.relativeLocation?.properties.state}`);

			await getForecast(data.properties.forecast, (foo) => {
				setCurrentWeather([]);
				setFutureForecast([]);

				let dayObject: foo = new Object({});
				foo.properties.periods.forEach((period, index) => {
					const currentPeriod = period.name.toLowerCase().includes("night") ? "night" : "day";
					dayObject[currentPeriod] = period;

					if (currentPeriod === "night") {
						const currentDayObject = Object.assign({}, dayObject);

						if (isCurrentDay(period.name)) {
							setCurrentWeather((prevArray) => [...prevArray, Object.assign({}, currentDayObject)]);
						} else {
							setFutureForecast((prevArray) => [...prevArray, Object.assign({}, currentDayObject)]);
						}

						dayObject = new Object({});
					}
				});
			});
		});
	};

	React.useEffect(() => {
		if (coordinates.x !== 0 && coordinates.y !== 0) {
			initApplication();
		}
	}, [coordinates]);

	const getWeatherCards = (weathrArray: Array<foo>) => {
		return weathrArray.map((period, index) => (
			// We re-map a few API props for clarity within the component
			<DailyWeather
				day={{
					...period.day,
					dayOfTheWeek: period.day?.name,
					description: period.day?.shortForecast,
				}}
				key={index}
				night={{
					...period.night,
					dayOfTheWeek: period.night?.name,
					description: period.night?.shortForecast,
				}}
			/>
		));
	};

	return (
		<div style={{ width: "100%" }}>
			<div>
				{/* <Heading>Location</Heading>
				<IconContext.Provider value={{ size: "3rem" }}>
					<BsGeoFill />
				</IconContext.Provider>
				{city}, {state} */}
			</div>
			<Heading>Current weather</Heading>
			{getWeatherCards(currentWeather)}
			<Heading>Upcoming forecast</Heading>
			{getWeatherCards(futureForecast)}
		</div>
	);
};
