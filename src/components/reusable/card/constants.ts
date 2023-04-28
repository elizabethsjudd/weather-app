import { AttrsObject } from "@/foundations/scripts/constants";

/**
 * Card component configuration options
 */
export interface CardConfig {
	attrs?: AttrsObject;
	title?: string,
	icon?: JSX.Element,
	slotDetails?: JSX.Element
}
