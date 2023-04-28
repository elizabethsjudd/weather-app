import { IconContext } from "react-icons";
import styles from "./styles.module.scss";
import { CardConfig } from "./constants";
import { combineAttributes } from "../../../foundations/scripts/utilities";

export const Card = ({ attrs = {}, title, slotIcon, slotDetails }: CardConfig): JSX.Element => {
	const attributes = combineAttributes(attrs, {
		className: styles.card,
	});

	return (
		<div {...attributes}>
			{title && <h3>{title}</h3>}

			{slotIcon && (
				<IconContext.Provider value={{ className: styles.icon, size: "3rem" }}>
					{slotIcon}
				</IconContext.Provider>
			)}

			<span>{slotDetails}</span>
		</div>
	);
};
