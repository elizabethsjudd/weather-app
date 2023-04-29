import { combineAttributes } from "../../../foundations/scripts/utilities";
import styles from "./styles.module.scss";
import { LabelConfig } from "./constants";

export const Label = ({
	attrs = {},
	htmlFor,
	children,
}: LabelConfig): JSX.Element => {
	const attributes = combineAttributes(attrs, {
		className: styles.label,
	});

	return (
		<label {...attributes} htmlFor={htmlFor}>{children}</label>
	);
};
