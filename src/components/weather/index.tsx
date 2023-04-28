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
import { WeatherConfig } from "./constants";
import { isCurrentDay } from "./utilities";
import { IconContext } from "react-icons";

import cardStyles from "../reusable/card/styles.module.scss";

export const Weather = ({
	day = "Today",
	isDaytime = false,
	description = "",
	temperature = 0,
	temperatureUnit = "F",
}: WeatherConfig): JSX.Element => {
	/**
	 * Uses the shortForecast description to determine which icon should be rendered
	 */
	// @todo - expand to support more weather variety
	const getIcon = (forecast: string): JSX.Element | null => {
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

	const isCurrent = isCurrentDay(day);
	const timeClass = isDaytime ? styles.day : styles.night;
	const typeClass = isCurrent ? styles.current : "";
	const svg = getIcon(description.toLowerCase());

	return (
		// @todo - add error handling if a value is not passed in correctly
		<Card
			attrs={{
				className: `${timeClass} ${typeClass}`,
			}}
			slotDetails={
				<>
					<span>
						{temperature}°{temperatureUnit}
					</span>
					<span>{description}</span>
				</>
			}
			slotIcon={
				<IconContext.Provider
					value={{ className: `${styles.icon} ${cardStyles.icon}`, size: "3rem" }}
				>
					{svg}
				</IconContext.Provider>
			}
			title={!isCurrent ? day : ""}
		/>
	);
};
