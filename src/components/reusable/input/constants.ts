import { AttrsObject } from "@/foundations/scripts/constants";

/**
 * Defines enum values for Input props
 */
export const allowedValues = {
	types: ["text", "search"] as const,
};

export type InputType = (typeof allowedValues.types)[number];

/**
 * Input component configuration options
 */
export interface InputConfig {
	attrs?: AttrsObject;
	id: string;
	placeholder?: string;
	slotPersistentIcon?: JSX.Element;
	type?: InputType;
	value?: string;
}
