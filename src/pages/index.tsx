import Head from "next/head";
import { useState } from "react";
import { BsPinMapFill, BsThermometerHalf } from "react-icons/bs";
import { IconContext } from "react-icons";
import { Forecast } from "@/components/forecast";
import { LocationForm } from "@/components/location-form";
import { Heading } from "@/components/reusable";
import { AddressCoordinates } from "@/components/location-form/constants";
import { hookUpdateConfig } from "@/components/forecast/constants";
import styles from "@/styles/Home.module.scss";

export default function Home() {
	const [coordinates, setCoordinates] = useState({
		x: 0,
		y: 0,
	});
	const [name, setName] = useState("Nowhere");

	const getForecast = (coordinates: AddressCoordinates) => {
		setCoordinates(coordinates);
	};

	const updateHeaders = ({ location }: hookUpdateConfig) => {
		setName(location);
	};

	return (
		<>
			<Head>
				<title>What&apos;s my weather</title>
				<meta content="Find the 7-day forecast" name="description" />
				<meta content="width=device-width, initial-scale=1" name="viewport" />
				<link href="/favicon.ico" rel="icon" />
			</Head>
			<header className={styles.header}>
				<h1>What&apos;s my weather?</h1>
			</header>
			<main className={styles.main}>
				<details className={styles.section} open>
					<summary className={styles.heading}>
						<Heading kind="headline" level={2} size="large">
							<IconContext.Provider value={{ className: styles.icon, size: "100%" }}>
								<BsPinMapFill />
							</IconContext.Provider>
							Set your location
						</Heading>
					</summary>
					<LocationForm hookChange={getForecast} />
				</details>

				<details className={styles.section} open>
					<summary className={styles.heading}>
						<Heading kind="headline" level={2} size="large">
							<IconContext.Provider value={{ className: styles.icon, size: "100%" }}>
								<BsThermometerHalf />
							</IconContext.Provider>
							Forecast for {name}
						</Heading>
					</summary>
					<Forecast coordinates={coordinates} hookUpdate={updateHeaders} />
				</details>
			</main>
		</>
	);
}
