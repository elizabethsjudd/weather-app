/**
 * Allows developers to pass custom attributes without requiring it to be a specified prop
 * most commonly used to support various accessibility use cases and/or testing setups (e.g. data-qa)
 */
export type AttrsObject = Record<string, unknown>;

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
