import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import { Forecast } from "@/components/forecast";
import { LocationForm } from "@/components/location-form";
import { BsPencilFill, BsPinMapFill } from "react-icons/bs";
import { IconContext } from "react-icons";

import { LocationContext, LocationContextType } from "@/context/location";
import { useMemo, useState } from "react";
import { Heading } from "@/components/reusable";

export default function Home() {
	const [coordinates, setCoordinates] = useState({
		x: 0,
		y: 0,
	});
	const [name, setName] = useState("Nowhere");
	const value = useMemo(
		() => ({ coordinates, name, setCoordinates, setName }),
		[coordinates, name]
	);

	const getForecast = (coordinates: LocationContextType["coordinates"]) => {
		setCoordinates(coordinates);
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
				<LocationContext.Provider value={value}>
					<details className={styles.section} open>
						<summary>
							<Heading kind="headline" level={2} size="large">
								<IconContext.Provider value={{ size: "2rem" }}>
									<BsPencilFill />
								</IconContext.Provider>
								Set your location
							</Heading>
						</summary>
						<LocationForm hookChange={getForecast} />
					</details>

					<details className={styles.section}>
						<summary>
							<Heading kind="headline" level={2} size="large">
								<IconContext.Provider value={{ size: "2rem" }}>
									<BsPinMapFill />
								</IconContext.Provider>
								Forecast for {name}
							</Heading>
						</summary>
						<Forecast {...coordinates} />
					</details>
				</LocationContext.Provider>
			</main>
		</>
	);
}
