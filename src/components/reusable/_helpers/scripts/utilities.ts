/**
 * Allows developers to pass custom attributes without requiring it to be a specified prop
 * most commonly used to support various accessibility use cases and/or testing setups (e.g. data-qa)
 */
export type AttrsObject = Record<string, unknown>;

/**
 * Set an object of attributes to be used in a given component.
 *
 * @param attributes - the custom attributes passed to the component
 * @param defaults - an optional object of the default attributes of a component
 * @returns - an object of component attributes
 */
export const combineAttributes = (
	attributes: AttrsObject,
	defaults: AttrsObject = {}
): AttrsObject => {
	// For classes, we want to combine the two values
	const className: boolean | string =
		defaults.className && attributes.className
			? `${defaults.className} ${attributes.className}`
			: false;

	/**
	 * Assign the defaults and the passed attributes to a new object
	 * to ensure that one attributes object without duplicated keys
	 * can be passed to the component.
	 */
	return Object.assign({}, defaults, attributes, {
		...(className && { className }),
	});
};
