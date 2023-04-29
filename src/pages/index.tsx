import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import { Forecast } from "@/components/forecast";
import { LocationForm } from "@/components/location-form";
import { BsPinMapFill } from "react-icons/bs";
import { IconContext } from "react-icons";

import { LocationContext } from "@/context/location";
import { useMemo, useState } from "react";

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
						<summary>Change your location</summary>
						<LocationForm />
					</details>

					<details className={styles.section}>
						<summary>
							<IconContext.Provider value={{ size: "3rem" }}>
								<BsPinMapFill />
							</IconContext.Provider>
							Forecast for {name}
						</summary>
						<Forecast />
					</details>
				</LocationContext.Provider>
			</main>
		</>
	);
}
