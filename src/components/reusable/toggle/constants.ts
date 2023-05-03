import { AttrsObject } from "@/foundations/scripts/utilities";
import styles from "./toggle.module.scss";

/** Expected attributes for the Toggle component */
interface ToggleAttrs extends AttrsObject {
	defaultChecked?: boolean;
	id: string;
	name?: string;
}

/**
 * Toggle component configuration options
 */
export interface ToggleConfig {
	/** Attributes to apply to the input element */
	attrs: ToggleAttrs;
	hookChange?: (arg0: boolean) => void;
	labels: {
		off: string;
		on: string;
	};
}

/** Default values for Toggle component */
export const defaults: ToggleConfig = {
	attrs: {
		className: styles.input,
		id: "",
	},
	labels: {
		off: "Off",
		on: "On",
	},
};
