import { AttrsObject } from "@/foundations/scripts/utilities";
import styles from "./styles.module.scss";

/**
 * Defines enum values for Input props
 */
export const allowedValues = {
	types: ["text", "search"] as const,
};

export type InputType = (typeof allowedValues.types)[number];

/** Expected attributes for the Input component */
interface InputAttrs extends AttrsObject {
	id: string;
	name: string;
	placeholder?: string;
	type?: InputType;
	value?: string;
}

/**
 * Input component configuration options
 */
export interface InputConfig {
	attrs: InputAttrs;
	slotPersistentIcon?: JSX.Element;
}

/** Default values for Input component */
export const defaults: InputConfig = {
	attrs: {
		className: styles.input,
		id: "",
		name: "",
		type: "text",
	},
};
