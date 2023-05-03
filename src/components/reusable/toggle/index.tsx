import { ToggleConfig, defaults } from "./constants";
import { BsCheck } from "react-icons/bs";
import { IconContext } from "react-icons";
import { combineAttributes } from "../../../foundations/scripts/utilities";
import styles from "./toggle.module.scss";

export const Toggle = ({ attrs }: ToggleConfig): JSX.Element => {
	const attributes = combineAttributes(attrs, defaults.attrs);

	console.log(attributes);

	return (
		<span className={`${styles.component}`}>
			<input className={styles.input} id="id-switch-1" role="switch" type="checkbox" />
			<span className={`${styles["u-focus-wrapper"]} ${styles.wrapper}`}>
				<span className={styles.display}>
					<span className={styles.toggle}>
						<IconContext.Provider value={{ className: `${styles.icon}`, size: "100%" }}>
							<BsCheck />
						</IconContext.Provider>
					</span>
				</span>
				<span className={`${styles["u-focus-indicator"]}`} />
			</span>
			<span aria-hidden="true" className={styles.on}>
				On
			</span>
			<span aria-hidden="true" className={styles.off}>
				Off
			</span>
		</span>
	);
};
