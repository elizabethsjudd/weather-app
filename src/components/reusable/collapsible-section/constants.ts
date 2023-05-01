import { AttrsObject } from "@/foundations/scripts/utilities";
import { HeadingConfig } from "../heading/constants";

/**
 * Defines enum values for CollapsibleSection props
 */
export const allowedValues = {
	states: ["open", "close"] as const,
};

export type CollapsibleSectionState = (typeof allowedValues.states)[number];

/**
 * CollapsibleSection component configuration options
 */
export interface CollapsibleSectionConfig {
	attrs?: AttrsObject;
	/** Elements to display when section is open */
	children: React.ReactNode;
	/**
	 * React Icon to display as the primary graphic within the card. If customizing the styling the IconContext will
	 * overwrite the default provided by the Card component.
	 */
	slotIcon?: React.ReactElement;
	/** Main heading for the card */
	slotTitle: HeadingConfig["children"];
	state: CollapsibleSectionState;
}
