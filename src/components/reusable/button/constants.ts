import { AttrsObject } from "@/foundations/scripts/utilities";

/**
 * Defines enum values for Button props
 */
export const allowedValues = {
	kinds: ["primary"] as const,
	types: ["button", "submit", "reset"] as const,
};

export type ButtonType = (typeof allowedValues.types)[number];
export type ButtonKind = (typeof allowedValues.kinds)[number];

/**
 * Button component configuration options
 */
export interface ButtonConfig {
	attrs?: AttrsObject;
	slotIcon?: JSX.Element;
	text: string;
	type?: ButtonType;
	kind?: ButtonKind;
}

export const defaults: Omit<ButtonConfig, 'text'> = {
	type: 'button',
	// In the real-world this would likely be secondary
	// but for the sake of time, I'm only creating the variants I need
	kind: 'primary'
}