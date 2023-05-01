import { IconContext } from "react-icons";
import styles from "./notification.module.scss";
import { NotificationConfig, NotificationKind, defaults } from "./constants";
import { combineAttributes } from "../../../foundations/scripts/utilities";
import { Heading } from "../heading";
import { MdError, MdInfo } from "react-icons/md";

export const Notification = ({ attrs = {}, title, children, kind }: NotificationConfig): JSX.Element => {
	const attributes = combineAttributes(attrs, defaults.attrs, styles[`notification--${kind}`]);

	const getIcon = (notificationKind: NotificationKind) => {
		return notificationKind === 'error' ? <MdError /> : <MdInfo />
	}

	return (
		<div {...attributes}>
			<IconContext.Provider value={{ className: styles.icon, size: "100%" }}>
				{getIcon(kind)}
			</IconContext.Provider>
			<div className={styles.content}>
				<Heading
					attrs={{className: styles.title }}
					kind="title"
					// Long-term we'd want to make this configurable
					level={3}
				>
					{title}
				</Heading>
				{children}
			</div>
		</div>
	);
};
