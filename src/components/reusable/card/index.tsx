import { IconContext } from "react-icons";
import styles from "./styles.module.scss";
import { CardConfig } from "./constants";
import { combineAttributes } from "../_helpers/scripts/utilities";
import { Heading } from "../heading";

export const Card = ({ attrs = {}, title, slotIcon, slotDetails }: CardConfig): JSX.Element => {
	const attributes = combineAttributes(attrs, {
		className: styles.card,
	});

	return (
		<div {...attributes}>
			<div className={styles.content}>
				{title && (
					<Heading
						attrs={{
							className: styles.title,
						}}
						kind="title"
						level={3}
						size="small"
					>
						{title}
					</Heading>
				)}
				<span className={styles.details}>{slotDetails}</span>
			</div>

			{slotIcon && (
				<IconContext.Provider value={{ className: styles.icon, size: "3rem" }}>
					{slotIcon}
				</IconContext.Provider>
			)}
		</div>
	);
};
