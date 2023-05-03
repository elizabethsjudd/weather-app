import { AttrsObject } from "@/foundations/scripts/utilities";
import styles from "./toggle.module.scss";

/** Expected attributes for the Toggle component */
interface ToggleAttrs extends AttrsObject {
	id: string;
	name: string;
}

/**
 * Toggle component configuration options
 */
export interface ToggleConfig {
	attrs: ToggleAttrs;
}

/** Default values for Toggle component */
export const defaults: ToggleConfig = {
	attrs: {
		className: styles.toggle,
		id: "",
		name: "",
	},
};
