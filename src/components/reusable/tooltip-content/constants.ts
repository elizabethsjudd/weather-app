import { AttrsObject } from "@/foundations/scripts/utilities";
import styles from "./tooltip-content.module.scss";

/**
 * Defines enum values for TooltipContent props
 */
export const allowedValues = {
	anchors: ["start", "center", "end"] as const,
	positions: ["top", "bottom", "left", "right"] as const,
	state: ["show", "hide"] as const,
};

export type TooltipPosition = (typeof allowedValues.positions)[number];
export type TooltipAnchor = (typeof allowedValues.anchors)[number];
export type TooltipState = (typeof allowedValues.state)[number];

/**
 * TooltipContent component configuration options
 */
export interface TooltipContentConfig {
	anchor: TooltipAnchor;
	attrs?: AttrsObject;
	position: TooltipPosition;
	state?: TooltipState;
	/** Restrict contents of a button to ensure valid HTML and accessibility */
	text: string;
}

/** Default values for TooltipContent component */
export const defaults: Omit<TooltipContentConfig, "text"> = {
	anchor: "center",
	attrs: {
		className: styles.tooltip,
	},
	position: "right",
	state: "hide",
};
