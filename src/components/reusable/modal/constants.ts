import { AttrsObject } from "@/foundations/scripts/utilities";
import styles from "./modal.module.scss";

/** Expected attributes for the Modal component */
interface ModalAttrs extends AttrsObject {
	// @todo Long-term, we'd want to use a utility to dynamically generate this but for the sake
	// of time, I'm relying on TS making it a required prop
	id: string;
}

/**
 * Modal component configuration options
 */
export interface ModalConfig {
	attrs: ModalAttrs;
	children: React.ReactNode;
	hookClose?: () => void;
	slotFooter: React.ReactElement;
	slotHeading: React.ReactNode;
	state: "open" | "close";
}

/** Default values for Modal component */
export const defaults: Omit<ModalConfig, "slotHeading" | "slotFooter" | "children"> = {
	attrs: {
		className: styles.backdrop,
		id: "",
	},
	state: "open",
};
