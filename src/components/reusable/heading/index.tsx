import React from "react";
import { combineAttributes } from "../../../foundations/scripts/utilities";
import { HeadingConfig, defaults } from "./constants";
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
		// @todo - long term using something like classNames library would allow for more robust and accurate HTML
		className: `${styles.heading} ${styles[`heading--${kind}--${size}`]} ${
			styles[`heading--${kind}`]
		}`,
	});

	return React.createElement(customTag, { ...attributes }, children);
};
