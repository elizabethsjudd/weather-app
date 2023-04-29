import { AttrsObject } from "@/foundations/scripts/utilities";

/** Expected attributes for the Label component */
interface LabelAttrs extends AttrsObject {
	htmlFor: string;
}

/**
 * Label component configuration options
 */
export interface LabelConfig {
	attrs: LabelAttrs;
	children: React.ReactNode;
}
