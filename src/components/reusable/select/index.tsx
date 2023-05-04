import { SelectConfig, defaults } from "./constants";
import { BsCaretDownFill } from "react-icons/bs";
import { ChangeEvent } from "react";
import { combineAttributes } from "../../../foundations/scripts/utilities";
import styles from "./select.module.scss";

export const Select = ({ attrs, children, hookChange }: SelectConfig): JSX.Element => {
	const attributes = combineAttributes(attrs, defaults.attrs);

	const handleChange = (e: ChangeEvent) => {
		hookChange && hookChange((e.target as HTMLSelectElement).value);
	};

	return (
		<div className={styles["u-focus-wrapper"]}>
			{/* @todo - typescript with React.ChangeEventHandler and custom function defs mismatch */}
			<select {...attributes} onChange={handleChange}>
				{children}
			</select>
			<div className={styles["u-focus-indicator"]} />
			<div className={styles.chevron}>
				<BsCaretDownFill />
			</div>
		</div>
	);
};
