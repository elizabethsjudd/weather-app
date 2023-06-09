import { BsPinMapFill, BsThermometerHalf } from "react-icons/bs";
import { CollapsibleSection, Heading } from "@/components/reusable/";
import { AddressCoordinates } from "@/components/location-form/constants";
import { Forecast } from "@/components/forecast";
import Head from "next/head";
import { LocationForm } from "@/components/location-form";
import { hookUpdateLocationConfig } from "@/components/forecast/constants";
import styles from "@/styles/Home.module.scss";
import { useState } from "react";

export default function Home() {
	const [coordinates, setCoordinates] = useState({
		x: 0,
		y: 0,
	});
	const [name, setName] = useState("");

	const getForecast = (coordinates: AddressCoordinates) => {
		setCoordinates(coordinates);
	};

	const updateHeaders = ({ location }: hookUpdateLocationConfig) => {
		setName(location);
	};

	const didFindLocation = coordinates.x !== 0 && coordinates.y !== 0;

	return (
		<>
			<Head>
				<title>What&apos;s my weather</title>
				<meta content="Find the 7-day forecast" name="description" />
				<meta content="width=device-width, initial-scale=1" name="viewport" />
				<link href="/favicon.ico" rel="icon" />
			</Head>
			<header className={styles.header}>
				<Heading kind="display" level={1}>
					What&apos;s my weather?
				</Heading>
			</header>
			<main className={styles.main}>
				<CollapsibleSection slotIcon={<BsPinMapFill />} slotTitle="Set your location" state="open">
					<LocationForm hookChange={getForecast} />
				</CollapsibleSection>

				{didFindLocation && (
					<CollapsibleSection
						slotIcon={<BsThermometerHalf />}
						slotTitle={`Forecast for ${name}`}
						state="open"
					>
						<Forecast
							coordinates={coordinates}
							hookUpdateLocation={updateHeaders}
							testId="forecast"
						/>
					</CollapsibleSection>
				)}
			</main>
		</>
	);
}
