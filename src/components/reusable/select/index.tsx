import { combineAttributes } from "../../../foundations/scripts/utilities";
import { SelectConfig, defaults } from "./constants";

export const Select = ({
	attrs = {},
	children
}: SelectConfig): JSX.Element => {
	const attributes = combineAttributes(attrs, defaults.attrs);

	return (
		<select {...attributes}>
			{children}
		</select>
	);
};
