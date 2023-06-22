import {
	FOCUSABLE_ELEMENTS,
	combineAttributes,
	debounce,
} from "../../../foundations/scripts/utilities";
import { ModalConfig, defaults } from "./constants";
import React, { KeyboardEventHandler, MouseEventHandler } from "react";
import { Heading } from "../heading";
import { IconButton } from "../icon-button";
import { MdClose } from "react-icons/md";
import styles from "./modal.module.scss";

export const Modal = ({
	attrs,
	hookClose,
	slotHeading,
	slotFooter,
	children,
	state = defaults.state,
}: ModalConfig): JSX.Element => {
	const attributes = combineAttributes(attrs, defaults.attrs);
	const element = React.useRef<HTMLDivElement>(null);
	const modalDiv = React.useRef<HTMLDivElement>(null);
	const contentAreaDiv = React.useRef<HTMLDivElement>(null);
	const closeButton = React.useRef<HTMLButtonElement>(null);
	// These are dynamically changing elements
	const [firstFocusableEl, setFirstFocusable] = React.useState<HTMLElement | null>(null);
	const [previouslyFocusedEl, setPreviouslyFocused] = React.useState<HTMLElement | null>(null);

	// Long-term we'd want a utility that ensures we have a unique value
	const headingId = `${attrs.id}-heading`;

	/**
	 * Ensures the user did not click within the dialog portion prior to closing the modal
	 * @param e - event to find what the user actually clicked on to trigger the function
	 */
	const handleDismiss: MouseEventHandler = (e) => {
		if (!(e.target as HTMLElement).closest(`.${styles.modal}`)) {
			handleClose();
		}
	};

	// @todo - not always getting assigned to first focusable
	const handleShiftTab = React.useCallback((e: KeyboardEvent) => {
		if (e.key === "Tab" && e.shiftKey) {
			closeButton.current?.focus();
			e.preventDefault();
		}
	}, []);

	/** Used to make sure legacy elements don't retain this event listener */
	const removeFocusTrap = React.useCallback(() => {
		firstFocusableEl?.removeEventListener("keydown", handleShiftTab);
	}, [handleShiftTab, firstFocusableEl]);

	/** Actually closes the modal */
	const handleClose = React.useCallback(() => {
		previouslyFocusedEl?.focus();
		element.current?.setAttribute("aria-hidden", "true");
		element.current?.classList.add(styles["is--closed"]);

		hookClose && hookClose();
		removeFocusTrap();
	}, [hookClose, previouslyFocusedEl, removeFocusTrap]);

	const handleTab: React.KeyboardEventHandler = (e) => {
		if (e.key === "Tab" && e.shiftKey === false) {
			firstFocusableEl?.focus();
			e.preventDefault();
		}
	};

	/** Allows keyboard users to press ESC to close the modal */
	const handleEsc: KeyboardEventHandler = (e) => {
		if (e.key === "Escape") {
			handleClose();
		}
	};

	/** Ensures keyboard users can not leave the modal */
	const setFocusTrap = React.useCallback(() => {
		const contentDiv = contentAreaDiv.current as HTMLDivElement;
		const isScrollable = contentDiv.scrollHeight > contentDiv.clientHeight;

		// We want to make sure that there aren't any legacy event listeners applied
		removeFocusTrap();

		if (isScrollable) {
			contentAreaDiv.current?.setAttribute("tabindex", "0");
			setFirstFocusable(contentDiv);
		} else {
			contentAreaDiv.current?.removeAttribute("tabindex");
			setFirstFocusable(element.current?.querySelector(FOCUSABLE_ELEMENTS) as HTMLElement);
		}

		firstFocusableEl?.focus();
		// Dynamically add event listener to slotted element to ensure focus is trapped
		firstFocusableEl?.addEventListener("keydown", handleShiftTab);
	}, [firstFocusableEl, removeFocusTrap, handleShiftTab]);

	React.useEffect(() => {
		const observer = new ResizeObserver(
			debounce(() => {
				setFocusTrap();
			}, 100)
		);
		// Ths observer is setup on the content area because some modals may have
		// dynamic content such as accordions or tabs that impact the height without
		// requiring a resize of the overall dialog
		observer.observe(contentAreaDiv.current as HTMLDivElement);
		// The observer also needs to be on the main Div in order to support vertical
		// resizing of the entire modal.
		observer.observe(element.current as HTMLDivElement);

		return () => {
			observer.disconnect();
		};
	}, [setFocusTrap]);

	React.useEffect(() => {
		if (state === "open") {
			/** Displays the modal and sets up custom focus management */
			element.current?.setAttribute("aria-hidden", "false");
			element.current?.classList.remove(styles["is--closed"]);

			setPreviouslyFocused(document.activeElement as HTMLElement);
			setFocusTrap();
		} else if (state === "close") {
			handleClose();
		}
	}, [state, handleClose, setFocusTrap]);

	return (
		// There is a proper role on this element and we're following WCAG's standards
		// eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
		<div
			{...attributes}
			aria-labelledby={headingId}
			aria-modal="true"
			onClick={handleDismiss}
			onKeyUp={handleEsc}
			ref={element}
			role="dialog"
		>
			<div className={styles.modal} ref={modalDiv}>
				<div className={styles.header}>
					<Heading attrs={{ id: headingId }} kind="headline" level={1} size="large">
						{slotHeading}
					</Heading>
				</div>
				<div className={styles.content} ref={contentAreaDiv}>
					{children}
				</div>
				<div className={styles.footer}>
					{/* Long-term we'd maybe want to consider more specific slots to help enforce design best practices */}
					{slotFooter}
				</div>
				<div className={styles.close}>
					<IconButton
						anchor={"center"}
						hookClick={handleClose}
						hookKeyPress={handleTab}
						kind="ghost"
						position={"bottom"}
						ref={closeButton}
						slotIcon={<MdClose />}
						text="Close"
					/>
				</div>
			</div>
		</div>
	);
};
