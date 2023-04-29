import { combineAttributes } from "../../../foundations/scripts/utilities";
import { SelectOptionConfig, defaults } from "./constants";

export const SelectOption = ({
	attrs = {},
	children
}: SelectOptionConfig): JSX.Element => {
	const attributes = combineAttributes(attrs, defaults.attrs);

	return (
		<option {...attributes}>{children}</option>
	);
};
