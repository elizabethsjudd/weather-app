import { TooltipContentConfig, defaults } from "./constants";
import { combineAttributes } from "../../../foundations/scripts/utilities";
import styles from "./tooltip-content.module.scss";

export const TooltipContent = ({
	attrs = {},
	text,
	position = defaults.position,
	anchor = defaults.anchor,
	state = defaults.state,
}: TooltipContentConfig): JSX.Element => {
	const dynamicClasses = `${styles[`tooltip--${position}`]} ${styles[`tooltip--${anchor}`]} ${
		state === "show" ? styles[`is--shown`] : ""
	}`;
	const attributes = combineAttributes(attrs, defaults.attrs, dynamicClasses);

	return (
		<>
			<span
				className={`${styles.pointer} ${styles[`pointer--${position}`]} ${
					state === "show" ? styles[`is--shown`] : ""
				}`}
			></span>
			<span
				{...attributes}
				// Developers should not be allowed to overwrite this attribute for accessibility
				role="tooltip"
			>
				{text}
			</span>
		</>
	);
};
