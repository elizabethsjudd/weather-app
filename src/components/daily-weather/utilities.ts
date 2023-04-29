import { allowedValues } from "./constants";

/**
 * Determines if it's daily weather forecast for the current day vs a future date
 *
 * @param dayDescriptor - string used to describe the weather information
 * @returns - if it's the current date or false if it's a future date
 */
export const isCurrentDay = (dayDescriptor?: string): boolean => {
	if (typeof dayDescriptor === "undefined") return false;
	return (
		dayDescriptor.match(new RegExp(allowedValues.currentDayDescriptors.join("|"), "gi")) !== null
	);
};
