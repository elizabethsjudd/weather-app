import { IconContext } from "react-icons";
import { combineAttributes } from "../_helpers/scripts/utilities";
import styles from "./styles.module.scss";
import { ButtonConfig, defaults } from "./constants";

export const Button = ({
	attrs = {},
	text,
	slotIcon,
	type = defaults.type,
	kind = defaults.kind,
}: ButtonConfig): JSX.Element => {
	const attributes = combineAttributes(attrs, {
		className: `${styles.button} ${styles[`button--${kind}`]}`,
	});

	return (
		<button type={type} {...attributes}>
			{slotIcon && (
				<IconContext.Provider value={{ className: styles.persistentIcon, size: "1rem" }}>
					{slotIcon}
				</IconContext.Provider>
			)}
			{text}
		</button>
	);
};
