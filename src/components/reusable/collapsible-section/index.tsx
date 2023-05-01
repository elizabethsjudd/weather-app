import { IconContext } from "react-icons";
import { combineAttributes } from "../../../foundations/scripts/utilities";
import { Heading } from "../heading";
import { CollapsibleSectionConfig } from "./constants";
import styles from "./collapsible-section.module.scss";

export const CollapsibleSection = ({ attrs = {}, slotTitle, slotIcon, children, state }: CollapsibleSectionConfig): JSX.Element => {
	const attributes = combineAttributes(attrs, {
		className: styles.section,
	});

	var opts: { open?: boolean } = {};
	if (state === 'open') {
		opts['open'] = true;
	}

	return (
		<details {...attributes} {...opts}>
			<summary className={styles.heading}>
				<Heading kind="headline" level={2} size="large">
					<IconContext.Provider value={{ className: styles.icon, size: "100%" }}>
						{slotIcon}
					</IconContext.Provider>
					{slotTitle}
				</Heading>
			</summary>
			{children}
		</details>
	);
};
