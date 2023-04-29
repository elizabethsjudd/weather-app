import { AttrsObject } from "@/foundations/scripts/utilities";
import { HeadingConfig } from "../heading/constants";

/**
 * Card component configuration options
 */
export interface CardConfig {
	attrs?: AttrsObject;
	/** Allows developers to pass in any type of element which contains additional information within the card */
	slotDetails?: React.ReactNode;
	/**
	 * React Icon to display as the primary graphic within the card. If customizing the styling the IconContext will
	 * overwrite the default provided by the Card component.
	 */
	slotIcon?: React.ReactElement;
	/** Main heading for the card */
	slotTitle?: HeadingConfig["children"];
}
