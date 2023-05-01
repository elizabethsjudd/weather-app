import { IconContext } from "react-icons";
import styles from "./card.module.scss";
import { CardConfig } from "./constants";
import { combineAttributes } from "../../../foundations/scripts/utilities";
import { Heading } from "../heading";

export const Card = ({ attrs = {}, slotTitle, slotIcon, slotDetails }: CardConfig): JSX.Element => {
	const attributes = combineAttributes(attrs, {
		className: styles.card,
	});

	return (
		<div {...attributes}>
			<div className={styles.content}>
				{slotTitle && (
					<Heading
						attrs={{
							className: styles.title,
						}}
						kind="title"
						// Long-term we'd want to make this configurable
						level={4}
						size="small"
					>
						{slotTitle}
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
