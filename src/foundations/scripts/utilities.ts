// UI Component related utilities
// ------------------------------------------------------------------
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
	defaults: AttrsObject = {},
	// @todo - Long-term I would expect to allow an object and use something like
	// the classNames library to make this more robust
	dynamicClass?: string
): AttrsObject => {
	// For classes, we want to combine the two values
	let className = "";

	// Ensure we don't have random "undefined" classes
	className = defaults.className ? `${className} ${defaults.className}` : className;
	className = attributes.className ? `${className} ${attributes.className}` : className;
	className = dynamicClass ? `${className} ${dynamicClass}` : className;

	/**
	 * Assign the defaults and the passed attributes to a new object
	 * to ensure that one attributes object without duplicated keys
	 * can be passed to the component.
	 */
	return Object.assign({}, defaults, attributes, {
		...(className !== "" && { className }),
	});
};

// API related utilities
// ------------------------------------------------------------------

export interface APIError {
	details: Error;
	error: string;
}

export type GenericCallbackFunction = (data: unknown) => void;

export const fetchAPIRequest = async (
	requestURL: string,
	callback: GenericCallbackFunction
): Promise<void> => {
	let json;

	try {
		const response = await fetch(requestURL);

		json = await response.json();
	} catch (error) {
		if (error instanceof SyntaxError) {
			// Unexpected token < in JSON
			callback({ details: error, error: "SyntaxError" });
		} else {
			callback({ details: error, error: "General error" });
		}
	}

	if (json) {
		callback(json);
	}
};
