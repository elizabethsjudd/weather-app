import { AttrsObject } from "@/foundations/scripts/utilities";

/** Expected attributes for the SelectOption component */
interface SelectOptionAttrs extends AttrsObject {
	value: string;
}

/**
 * SelectOption component configuration options
 */
export interface SelectOptionConfig {
	attrs: SelectOptionAttrs;
	children: React.ReactNode;
}

/** Default values for SelectOption component */
export const defaults: Omit<SelectOptionConfig, "children"> = {
	attrs: {
		value: "",
	},
};
