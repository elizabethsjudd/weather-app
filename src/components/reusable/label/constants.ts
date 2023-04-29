import { AttrsObject } from "@/foundations/scripts/utilities";

/**
 * Label component configuration options
 */
export interface LabelConfig {
	attrs?: AttrsObject;
	htmlFor: string;
	children: React.ReactNode;
}
