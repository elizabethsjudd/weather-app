import { InputConfig, defaults } from "./constants";
import { IconContext } from "react-icons";
import { combineAttributes } from "../../../foundations/scripts/utilities";
import styles from "./input.module.scss";

export const Input = ({ attrs, slotPersistentIcon }: InputConfig): JSX.Element => {
	const iconClass =
		typeof slotPersistentIcon !== "undefined" ? styles["input--persistentIcon"] : "";

	const attributes = combineAttributes(attrs, defaults.attrs, iconClass);

	return (
		<div className={styles["u-focus-wrapper"]}>
			{slotPersistentIcon && (
				<IconContext.Provider value={{ className: styles.persistentIcon, size: "1rem" }}>
					{slotPersistentIcon}
				</IconContext.Provider>
			)}
			<input {...attributes} />
			<div className={styles["u-focus-indicator"]} />
		</div>
	);
};
