import { LabelConfig } from "./constants";
import { combineAttributes } from "../../../foundations/scripts/utilities";
import styles from "./label.module.scss";

export const Label = ({ attrs, children }: LabelConfig): JSX.Element => {
	const attributes = combineAttributes(attrs, {
		className: styles.label,
	});

	return <label {...attributes}>{children}</label>;
};
