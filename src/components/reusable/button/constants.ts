import { AttrsObject } from "@/foundations/scripts/utilities";
import styles from "./button.module.scss";

/**
 * Defines enum values for Button props
 */
export const allowedValues = {
	kinds: ["secondary", "primary"] as const,
	types: ["button", "submit", "reset"] as const,
};

export type ButtonType = (typeof allowedValues.types)[number];
export type ButtonKind = (typeof allowedValues.kinds)[number];

/** Expected attributes for the Button component */
interface ButtonAttrs extends AttrsObject {
	type?: ButtonType;
}

/**
 * Button component configuration options
 */
export interface ButtonConfig {
	attrs?: ButtonAttrs;
	kind?: ButtonKind;
	slotIcon?: React.ReactElement;
	/** Restrict contents of a button to ensure valid HTML and accessibility */
	text: string;
}

/** Default values for Button component */
export const defaults: Omit<ButtonConfig, "text"> = {
	attrs: {
		className: styles.button,
		type: "button",
	},
	kind: "secondary",
};
