import * as React from "react";
import {
	BsCloudLightningRainFill,
	BsCloudRainFill,
	BsCloudSnowFill,
	BsCloudSunFill,
	BsCloudsFill,
	BsFillCloudMoonFill,
	BsFillMoonStarsFill,
	BsSunFill,
} from "react-icons/bs";
import { DailyWeatherConfig, WeatherInfo } from "./constants";
import { WiHumidity, WiRaindrops, WiWindDeg, WiWindy } from "react-icons/wi";
import { Card } from "../reusable/card";
import { IconContext } from "react-icons";
import { Modal } from "../reusable";
import cardStyles from "../reusable/card/card.module.scss";
import { isCurrentDay } from "./utilities";
import styles from "./daily-weather.module.scss";

export const DailyWeather = ({ day, night, testId }: DailyWeatherConfig): JSX.Element => {
	const [displayDetails, setDisplayDetails] = React.useState(false);

	/**
	 * Uses the description to determine which icon to render
	 */
	const getIcon = (forecast: string, isNight = false): React.ReactNode => {
		// @todo - Long-term we'd want to support more weather variety

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
		if (isNight) {
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

	/** Creates a card to display the correct information for each time period during the day */
	const getCard = (
		{ temperature, temperatureUnit, description, dayOfTheWeek }: WeatherInfo,
		isNight = false
	) => {
		const icon = getIcon((description as string).toLowerCase(), isNight);
		const timeOfDayModifier = isNight ? styles["timeOfDay--night"] : styles["timeOfDay--day"];
		// We don't want to display the heading for night as it's duplicate visually but we still want to
		// provide that information for screen reader users.
		const title = dayOfTheWeek?.includes(" Night") ? (
			<span className={styles["u-visuallyHidden"]}>{dayOfTheWeek}</span>
		) : (
			<span className={styles.heading}>{dayOfTheWeek}</span>
		);

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
					<span className={`${cardStyles.icon} ${styles.icon}`}>
						<IconContext.Provider value={{ className: `${cardStyles.icon}`, size: "100%" }}>
							{icon}
						</IconContext.Provider>
					</span>
				}
				slotTitle={title}
			/>
		);
	};

	const getModalDetails = (
		{
			temperature,
			temperatureUnit,
			details,
			description,
			windDirection,
			windSpeed,
			humidity,
			precipitationProbability,
		}: WeatherInfo,
		hasTitle: boolean
	) => {
		return (
			<>
				<Card
					slotDetails={
						<>
							<span className={styles.modalTemp}>
								{temperature}°{temperatureUnit}
							</span>
							<div className={styles.longDescription}>{details}</div>
						</>
					}
					slotIcon={
						<span className={`${cardStyles.icon} ${styles.modalIcon}`}>
							<IconContext.Provider value={{ className: `${cardStyles.icon}`, size: "100%" }}>
								{getIcon(description.toLowerCase())}
							</IconContext.Provider>
						</span>
					}
					slotTitle={hasTitle && <span className={styles.modalSubtitle}>Night</span>}
				/>
				<div className={styles.quickOverview}>
					<div>
						<WiWindDeg /> Wind<span className={styles["u-visuallyHidden"]}> direction</span>:{" "}
						{windDirection}
					</div>
					<div>
						<WiWindy />
						<span className={styles["u-visuallyHidden"]}>Wind </span>Speed: {windSpeed}
					</div>
				</div>
				<div className={styles.quickOverview}>
					<div>
						<WiHumidity />
						Humidity: {humidity}%
					</div>
					{precipitationProbability && (
						<div>
							<WiRaindrops />
							Precipitation: {precipitationProbability}%
						</div>
					)}
				</div>
			</>
		);
	};

	const openDetailsModal = () => {
		setDisplayDetails(true);
	};

	const syncModalState = () => {
		setDisplayDetails(false);
	};

	// Have to use the night object because in the evening, the "day" value does not exist
	const kindClass = isCurrentDay(night.dayOfTheWeek)
		? styles["dailyWeather--current"]
		: styles["dailyWeather--future"];

	const opAttrs: { "data-testid"?: string } = {};
	if (testId) {
		opAttrs["data-testid"] = testId;
	}

	const modalId = testId ? `${testId}-modal` : "details-modal";
	const buttonId = testId ? `${testId}-button` : "details-modal-button";

	return (
		<div className={styles.wrapper}>
			<div
				{...opAttrs}
				className={`${styles.dailyWeather} ${kindClass} ${
					!day ? styles["dailyWeather--nightOnly"] : ""
				}`}
			>
				{day && getCard(day)}
				{getCard(night, true)}
			</div>
			<button
				aria-controls={modalId}
				aria-label="View more details"
				className={styles.detailsButton}
				data-testid={buttonId}
				onClick={openDetailsModal}
			></button>
			<Modal
				attrs={{ id: modalId }}
				hookClose={syncModalState}
				slotHeading={
					isCurrentDay(night.dayOfTheWeek) ? "Today" : night.dayOfTheWeek.replace(" Night", "")
				}
				state={displayDetails ? "open" : "close"}
			>
				<>
					{day && getModalDetails(day, false)}
					{getModalDetails(night, !!day)}
				</>
			</Modal>
		</div>
	);
};
