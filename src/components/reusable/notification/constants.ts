import { AttrsObject } from "@/foundations/scripts/utilities";
import styles from "./notification.module.scss";

/**
 * Defines enum values for Notification props
 */
export const allowedValues = {
	kinds: ["error", "info"] as const,
};

export type NotificationKind = (typeof allowedValues.kinds)[number];

/**
 * Notification component configuration options
 */
export interface NotificationConfig {
	attrs?: AttrsObject;
	children: React.ReactNode;
	kind: NotificationKind;
	title: string;

}


/** Default values for Notification component */
export const defaults: Omit<NotificationConfig, "children"> = {
	kind: "info",
	title: "Hello",
	attrs: {
		'aria-live': 'polite',
		className: styles.notification
	}
};
