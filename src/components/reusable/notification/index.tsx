import { IconContext } from "react-icons";
import { MdError, MdInfo } from "react-icons/md";
import { combineAttributes } from "../../../foundations/scripts/utilities";
import { NotificationConfig, NotificationKind, defaults } from "./constants";
import styles from "./notification.module.scss";

export const Notification = ({
	attrs = {},
	title,
	children,
	kind,
}: NotificationConfig): JSX.Element => {
	const attributes = combineAttributes(attrs, defaults.attrs, styles[`notification--${kind}`]);

	const getIcon = (notificationKind: NotificationKind) => {
		return notificationKind === "error" ? <MdError /> : <MdInfo />;
	};

	return (
		<div {...attributes}>
			<IconContext.Provider value={{ className: styles.icon, size: "100%" }}>
				{getIcon(kind)}
			</IconContext.Provider>
			<div className={styles.content}>
				<strong className={styles.title}>{title}:</strong> {children}
			</div>
		</div>
	);
};
