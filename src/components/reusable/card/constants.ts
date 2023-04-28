import { AttrsObject } from "@/foundations/scripts/utilities";

/**
 * Card component configuration options
 */
export interface CardConfig {
	attrs?: AttrsObject;
	/** Allows developers to pass in any type of element which contains additional information within the card */
	slotDetails?: JSX.Element;
	/** React Icon to display as the primary graphic within the card */
	slotIcon?: JSX.Element | null;
	/** Main heading for the card */
	title?: string;
}