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
				{...attributes}
				// Developers should not be allowed to overwrite this attribute for accessibility
				role="tooltip"
			>
				{text}
			</span>
			{/* The pointer is a separate element so that we can support any size trigger element and have it align as expected */}
			<span
				className={`${styles.pointer} ${styles[`pointer--${position}`]} tooltipContent-pointer`}
			></span>
		</>
	);
};
