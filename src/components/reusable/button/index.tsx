import { ButtonConfig, defaults } from "./constants";
import { IconContext } from "react-icons";
import { combineAttributes } from "../../../foundations/scripts/utilities";
import styles from "./button.module.scss";

export const Button = ({
	attrs = {},
	text,
	slotIcon,
	kind = defaults.kind,
}: ButtonConfig): JSX.Element => {
	const attributes = combineAttributes(attrs, defaults.attrs, styles[`button--${kind}`]);

	return (
		<button {...attributes}>
			{slotIcon && (
				<IconContext.Provider value={{ className: styles.icon, size: "1rem" }}>
					{slotIcon}
				</IconContext.Provider>
			)}
			{text}
		</button>
	);
};
