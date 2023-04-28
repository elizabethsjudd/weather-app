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
			{title && <h3 className={styles.title}>{title}</h3>}

			{slotIcon && (
				<IconContext.Provider value={{ className: styles.icon, size: "3rem" }}>
					{slotIcon}
				</IconContext.Provider>
			)}

			<span className={styles.details}>{slotDetails}</span>
		</div>
	);
};
