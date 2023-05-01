import React, { FormEvent } from "react";
import { Button, Label, Input, Select, SelectOption, Notification } from "../reusable/";
import { GeocoderData, LocationFormConfig, USStateValues } from "./constants";
import { getCoordinatesFromAddress } from "./utilities";
import styles from "./location-form.module.scss";

export const LocationForm = ({ hookChange }: LocationFormConfig): JSX.Element => {
	const [formValidation, setFormValidation] = React.useState("");

	const onSubmit = (event: FormEvent) => {
		event.preventDefault();
		// @todo - Figure out the correct way to type an HTML form's fields
		const form = event.target as any;
		getCoordinatesFromAddress(
			{
				city: form.city.value,
				state: form.state.value,
				street: form.street.value,
				zip: form.zip.value,
			},
			(data) => {
				const locationData = data as GeocoderData;

				try {
					if (locationData.errors && locationData.errors.length > 0) {
						// Handle defined errors from API
						hookChange && hookChange({ x: 0, y: 0 });
						setFormValidation(locationData.errors?.join("; "));
					} else if (locationData.result.addressMatches.length === 0) {
						// No address found
						hookChange && hookChange({ x: 0, y: 0 });
						setFormValidation("Invalid address/ Address not found in database, try a new address");
					} else {
						// Address found
						hookChange && hookChange(locationData.result.addressMatches[0].coordinates);
						setFormValidation("");
					}
				} catch {
					// Had issues even reaching the database
					hookChange && hookChange({ x: 0, y: 0 });
					setFormValidation("There was an issue contacting the database");
				}
			}
		);
	};

	const validateZip = (event: InputEvent) => {
		if (!(event.target as HTMLInputElement).value.match(/^[0-9]{5}(?:-[0-9]{4})?$/)) {
			setFormValidation("Invalid zip code, enter a 5-digit number");
		} else {
			setFormValidation("");
		}
	};

	const validateStreet = (event: InputEvent) => {
		event.preventDefault();
		if ((event.target as HTMLInputElement).value.trim() === "") {
			setFormValidation("A street address is required");
		} else {
			setFormValidation("");
		}
	};

	return (
		<>
			{formValidation !== "" && (
				<Notification
					attrs={{ className: styles.notification, "data-testid": "form-error" }}
					kind="error"
					title="Error"
				>
					{formValidation}
				</Notification>
			)}
			<form className={styles.form} onSubmit={onSubmit}>
				<p className={styles.helperText}>* Denotes required fields</p>
				<Label attrs={{ htmlFor: "street" }}>Street*</Label>
				<Input
					attrs={{
						"aria-required": true,
						id: "street",
						maxLength: 100,
						name: "street",
						onBlur: validateStreet,
						placeholder: "123 Main St.",
						required: true,
					}}
				/>
				<div className={styles.addressRow}>
					<div className={styles.city}>
						<Label attrs={{ htmlFor: "city" }}>City</Label>
						<Input attrs={{ id: "city", name: "city", placeholder: "Nowhere" }} />
					</div>
					<div>
						<Label attrs={{ htmlFor: "state" }}>State</Label>
						<Select attrs={{ defaultValue: "", id: "state", name: "state" }}>
							<>
								<SelectOption attrs={{ disabled: true, value: "" }}>Select your state</SelectOption>
								{USStateValues &&
									Object.keys(USStateValues).map((abbr) => {
										return (
											<SelectOption attrs={{ value: abbr }} key={abbr}>
												{USStateValues[abbr]}
											</SelectOption>
										);
									})}
							</>
						</Select>
					</div>
					<div>
						<Label attrs={{ htmlFor: "zip" }}>Zip code</Label>
						<Input attrs={{ id: "zip", name: "zip", onBlur: validateZip, placeholder: "12345" }} />
					</div>
				</div>

				<Button
					attrs={{ className: styles.button, type: "submit" }}
					kind="primary"
					text="Get location"
				/>
			</form>
		</>
	);
};
