import { combineAttributes } from "../../../foundations/scripts/utilities";
import styles from "./label.module.scss";
import { LabelConfig } from "./constants";

export const Label = ({ attrs, children }: LabelConfig): JSX.Element => {
	const attributes = combineAttributes(attrs, {
		className: styles.label,
	});

	return <label {...attributes}>{children}</label>;
};
