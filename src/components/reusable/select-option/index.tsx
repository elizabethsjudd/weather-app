import { SelectOptionConfig, defaults } from "./constants";
import { combineAttributes } from "../../../foundations/scripts/utilities";

export const SelectOption = ({ attrs, children }: SelectOptionConfig): JSX.Element => {
	const attributes = combineAttributes(attrs, defaults.attrs);

	return <option {...attributes}>{children}</option>;
};
