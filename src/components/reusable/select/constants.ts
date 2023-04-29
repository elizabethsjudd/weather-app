import { AttrsObject } from "@/foundations/scripts/utilities";
import { SelectOption } from "../select-option";
import styles from "./styles.module.scss";

/**
 * Select component configuration options
 */
export interface SelectConfig {
	attrs?: AttrsObject;
	children: React.ReactElement<typeof SelectOption>
}

export const defaults: Omit<SelectConfig, 'children'> = {
	attrs: {
		name: '',
		id: '',
		className: styles.select
	}
}
