import { AttrsObject } from "@/foundations/scripts/utilities";

/**
 * SelectOption component configuration options
 */
export interface SelectOptionConfig {
	attrs?: AttrsObject;
	children: React.ReactNode
}

export const defaults: Omit<SelectOptionConfig, 'children'> = {
	attrs: {
		value: '',
	}
}
