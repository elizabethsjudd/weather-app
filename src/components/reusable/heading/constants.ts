import { AttrsObject } from "@/foundations/scripts/utilities";

/**
 * Defines enum values for Heading props
 */
export const allowedValues = {
	levels: [1, 2, 3, 4, 5, 6] as const,
	kinds: ['headline', 'title'] as const,
	sizes: ['large', 'medium', 'small', 'xsmall' as const]
};

export type HeadingLevel = (typeof allowedValues.levels)[number];
export type HeadingKind = (typeof allowedValues.kinds)[number];
export type HeadingSize = (typeof allowedValues.sizes)[number];

/**
 * Heading component configuration options
 */
export interface HeadingConfig {
	attrs?: AttrsObject;
	level: HeadingLevel;
	kind: HeadingKind;
	size: HeadingSize;
	children?: JSX.Element
}

/**
 * Default prop values
 */
export const defaults: HeadingConfig = {
	level: 2,
	kind: 'title',
	size: 'medium'
}
