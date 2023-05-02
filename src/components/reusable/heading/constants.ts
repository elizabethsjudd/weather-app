import { AttrsObject } from "@/foundations/scripts/utilities";

/**
 * Defines enum values for Heading props
 */
export const allowedValues = {
	kinds: ["headline", "title", "display"] as const,
	levels: [1, 2, 3, 4, 5, 6] as const,
	sizes: ["large", "medium", "small", "xsmall" as const],
};

export type HeadingLevel = (typeof allowedValues.levels)[number];
export type HeadingKind = (typeof allowedValues.kinds)[number];
export type HeadingSize = (typeof allowedValues.sizes)[number];

/**
 * Heading component configuration options
 */
export interface HeadingConfig {
	attrs?: AttrsObject;
	children: React.ReactNode;
	kind?: HeadingKind;
	level?: HeadingLevel;
	size?: HeadingSize;
}

/** Default values for Heading component */
export const defaults: Omit<HeadingConfig, "children"> = {
	kind: "title",
	level: 2,
	size: "medium",
};
