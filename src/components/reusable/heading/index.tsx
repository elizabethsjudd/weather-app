import { HeadingConfig, defaults } from "./constants";
import React from "react";
import { combineAttributes } from "../../../foundations/scripts/utilities";
import styles from "./heading.module.scss";

export const Heading = ({
	attrs = {},
	level = defaults.level,
	kind = defaults.kind,
	size = defaults.size,
	children,
}: HeadingConfig): JSX.Element => {
	const customTag = `h${level}`;
	const attributes = combineAttributes(attrs, {
		// @todo - Long-term using something like classNames library would allow for more robust and accurate HTML
		className: `${styles.heading} ${styles[`heading--${kind}--${size}`]} ${
			styles[`heading--${kind}`]
		}`,
	});

	return React.createElement(customTag, { ...attributes }, children);
};
