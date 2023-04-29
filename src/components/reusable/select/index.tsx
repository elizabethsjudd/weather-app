import { BsCaretDownFill } from "react-icons/bs";
import { combineAttributes } from "../../../foundations/scripts/utilities";
import { SelectConfig, defaults } from "./constants";
import styles from "./styles.module.scss";

export const Select = ({ attrs, children }: SelectConfig): JSX.Element => {
	const attributes = combineAttributes(attrs, defaults.attrs);

	return (
		<div className={styles["u-focus-wrapper"]}>
			<select {...attributes}>{children}</select>
			<div className={styles["u-focus-indicator"]} />
			<div className={styles.chevron}>
				<BsCaretDownFill />
			</div>
		</div>
	);
};
