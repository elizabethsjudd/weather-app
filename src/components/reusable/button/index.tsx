import { IconContext } from "react-icons";
import styles from "./styles.module.scss";
import { ButtonConfig, defaults } from "./constants";

export const Button = ({
	attrs = {},
	text,
	slotIcon,
	type = defaults.type,
	kind = defaults.kind
}: ButtonConfig): JSX.Element => {
	return (
		<button
			type={type}
			{...attrs}
			className={`${styles.button} ${styles[`button--${kind}`]}`}
		>
			{slotIcon && (
				<IconContext.Provider value={{ className: styles.persistentIcon, size: "1rem" }}>
					{slotIcon}
				</IconContext.Provider>
			)}
			{text}
		</button>
	);
};
