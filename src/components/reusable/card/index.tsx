import { IconContext } from "react-icons";
import styles from "./styles.module.scss";
import { CardConfig } from "./constants";

export const Card = ({
	attrs = {},
	title,
	icon,
	slotDetails,
}: CardConfig): JSX.Element => {
	return (
		<div className={styles.card} {...attrs}>
			{title && <h3>{title}</h3>}

			{icon && (
				<IconContext.Provider value={{ className: styles.icon, size: "3rem" }}>
					{icon}
				</IconContext.Provider>
			)}

			<span>{slotDetails}</span>
		</div>
	);
};
