import { IconButtonConfig, defaults } from "./constants";
import React, { FocusEventHandler, KeyboardEventHandler } from "react";
import { IconContext } from "react-icons";
import { TooltipContent } from "../tooltip-content";
import { combineAttributes } from "../../../foundations/scripts/utilities";
import styles from "./icon-button.module.scss";

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonConfig>(function IconButton(
	{
		attrs = {},
		text,
		slotIcon,
		kind = defaults.kind,
		anchor = defaults.anchor,
		position = defaults.position,
		hookClick,
		hookKeyPress,
	},
	ref
): JSX.Element {
	const attributes = combineAttributes(attrs, defaults.attrs, styles[`button--${kind}`]);

	const handleKeyPress: KeyboardEventHandler = (event) => {
		if (event.code === "Escape") {
			(event.target as HTMLButtonElement).classList.remove(styles.tooltipTrigger);
		}

		hookKeyPress && hookKeyPress(event);
	};

	const handleBlur: FocusEventHandler = (event) => {
		(event.target as HTMLButtonElement).classList.add(styles.tooltipTrigger);
	};

	return (
		<button
			ref={ref}
			{...attributes}
			onBlur={handleBlur}
			onClick={hookClick}
			onKeyDown={handleKeyPress}
		>
			{slotIcon && (
				<IconContext.Provider value={{ className: styles.icon, size: "1rem" }}>
					{slotIcon}
				</IconContext.Provider>
			)}
			<TooltipContent
				anchor={anchor}
				attrs={{
					className: styles.tooltip,
				}}
				position={position}
				text={text}
			></TooltipContent>
		</button>
	);
});
