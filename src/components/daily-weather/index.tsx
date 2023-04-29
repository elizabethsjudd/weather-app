import * as React from "react";
import styles from "./styles.module.scss";
import {
	BsCloudSnowFill,
	BsFillCloudMoonFill,
	BsFillMoonStarsFill,
	BsSunFill,
	BsCloudSunFill,
	BsCloudLightningRainFill,
	BsCloudRainFill,
	BsCloudsFill,
} from "react-icons/bs";
import { Card } from "../reusable/card";
import { DailyWeatherConfig, WeatherInfo } from "./constants";
import { isCurrentDay } from "./utilities";
import { IconContext } from "react-icons";

import cardStyles from "../reusable/card/styles.module.scss";

export const DailyWeather = ({ day, night }: DailyWeatherConfig): JSX.Element => {
	/**
	 * Uses the shortForecast description to determine which icon should be rendered
	 */
	// @todo - expand to support more weather variety
	const getIcon = (forecast: string, isDaytime = false): JSX.Element | null => {
		// Want to test the most extreme weather first that could have the most unique wording
		if (forecast.includes("snow")) {
			return <BsCloudSnowFill />;
		}
		if (forecast.includes("thunderstorms")) {
			return <BsCloudLightningRainFill />;
		}
		if (forecast.includes("showers")) {
			return <BsCloudRainFill />;
		}
		if (forecast.includes("cloudy") && !forecast.includes("partly")) {
			return <BsCloudsFill />;
		}

		// Test for night specific icons
		if (!isDaytime) {
			if (forecast.includes("clear")) {
				return forecast.includes("mostly") ? <BsFillCloudMoonFill /> : <BsFillMoonStarsFill />;
			}

			if (forecast.includes("cloudy") && forecast.includes("partly")) {
				return <BsFillCloudMoonFill />;
			}
		}

		// Test for daytime specific icons
		if (forecast.includes("sunny")) {
			return forecast.includes("mostly") ? <BsCloudSunFill /> : <BsSunFill />;
		}

		if (forecast.includes("cloudy") && forecast.includes("partly")) {
			return <BsCloudSunFill />;
		}

		return null;
	};

	const getCard = (
		{ temperature, temperatureUnit, description, dayOfTheWeek }: WeatherInfo,
		isNight = false
	) => {
		const icon = getIcon((description as string).toLowerCase());
		const timeOfDayModifier = isNight ? styles["timeOfDay--night"] : styles["timeOfDay--day"];

		return (
			<Card
				attrs={{
					className: `${styles.timeOfDay} ${timeOfDayModifier}`,
				}}
				slotDetails={
					<>
						<span className={styles.temp}>
							{temperature}°{temperatureUnit}
						</span>
						<span className={styles.desc}>{description}</span>
					</>
				}
				slotIcon={
					<IconContext.Provider
						value={{ className: `${styles.icon} ${cardStyles.icon}`, size: "3rem" }}
					>
						{icon}
					</IconContext.Provider>
				}
				title={dayOfTheWeek?.toLowerCase().includes(" night") ? "" : dayOfTheWeek}
			/>
		);
	};

	if (typeof night === "undefined") {
		// @todo - add error handling if a value is not passed in correctly
		return <div>Error loading data</div>;
	}

	// Have to use the night object as later in the day, the "day" value does not exist
	const isCurrent = isCurrentDay(night.dayOfTheWeek);
	const kindClass = isCurrent ? styles["dailyWeather--current"] : "";

	return (
		<div
			className={`${styles.dailyWeather} ${kindClass} ${
				!day.description ? styles["dailyWeather--nightOnly"] : ""
			}`}
		>
			{day.description && getCard(day)}
			{night.description && getCard(night, true)}
		</div>
	);
};
