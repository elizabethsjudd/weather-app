import Head from "next/head";
import styles from "@/styles/Home.module.scss";

export default function Home() {
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
			</main>
		</>
	);
}
