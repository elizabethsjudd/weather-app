import { ButtonConfig, defaults as buttonDefaults } from "../button/constants";
import { TooltipContentConfig, defaults as tooltipDefaults } from "../tooltip-content/constants";
import styles from "./icon-button.module.scss";

/**
 * IconButton component configuration options
 */
export type IconButtonConfig = ButtonConfig & Omit<TooltipContentConfig, "attrs" | "state">;

/** Default values for IconButton component */
export const defaults: Omit<IconButtonConfig, "text"> = {
	...buttonDefaults,
	anchor: tooltipDefaults.anchor,
	attrs: {
		...buttonDefaults.attrs,
		className: `${styles.button} ${styles.tooltipTrigger}`,
	},
	// Intentionally overwrite the Button defaults as ghost is most common for this button kind
	kind: "ghost",
	position: tooltipDefaults.position,
};
