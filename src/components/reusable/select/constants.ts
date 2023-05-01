import { AttrsObject } from "@/foundations/scripts/utilities";
import { SelectOption } from "../select-option";
import styles from "./select.module.scss";

/** Expected attributes for the Select component */
interface SelectAttrs extends AttrsObject {
	id: string;
	name: string;
}

/**
 * Select component configuration options
 */
export interface SelectConfig {
	attrs: SelectAttrs;
	children: React.ReactElement<typeof SelectOption>;
}

/** Default values for Select component */
export const defaults: Omit<SelectConfig, "children"> = {
	attrs: {
		className: styles.select,
		id: "",
		name: "",
	},
};
