import { allowedValues } from "./constants";

export const isCurrentDay = (day: string): boolean => {
	return day.match(new RegExp(allowedValues.currentDayDescriptors.join("|"), "gi")) !== null;
};
