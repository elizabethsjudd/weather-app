import { ToggleConfig, defaults } from "./constants";
import { BsCheck } from "react-icons/bs";
import { ChangeEvent } from "react";
import { IconContext } from "react-icons";
import { combineAttributes } from "../../../foundations/scripts/utilities";
import styles from "./toggle.module.scss";

export const Toggle = ({
	attrs,
	hookChange,
	labels = defaults.labels,
}: ToggleConfig): JSX.Element => {
	const attributes = combineAttributes(attrs, defaults.attrs);

	const handleChange = (event: ChangeEvent) => {
		hookChange && hookChange((event.target as HTMLInputElement).checked);
	};

	return (
		<span className={styles.component}>
			{/* For accessibility developers can not overwrite role and type attributes */}
			<input
				className={styles.input}
				{...attributes}
				onChange={handleChange}
				role="switch"
				type="checkbox"
			/>
			<span className={`${styles["u-focus-wrapper"]} ${styles.wrapper}`}>
				<span className={styles.display}>
					<span className={styles.toggle}>
						<IconContext.Provider value={{ className: styles.icon, size: "100%" }}>
							<BsCheck />
						</IconContext.Provider>
					</span>
				</span>
				<span className={styles["u-focus-indicator"]} />
			</span>
			<span aria-hidden="true" className={styles.on}>
				{labels.on}
			</span>
			<span aria-hidden="true" className={styles.off}>
				{labels.off}
			</span>
		</span>
	);
};
