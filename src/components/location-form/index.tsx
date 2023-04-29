import React, { FormEvent } from "react";
import { Button, Label, Input, Select, SelectOption } from "../reusable/";
import { GeocoderData, LocationFormConfig, USStateValues } from "./constants";
import { getCoordinatesFromAddress } from "./utilities";
import styles from "./styles.module.scss";

export const LocationForm = ({ hookChange }: LocationFormConfig): JSX.Element => {
	const onSubmit = (event: FormEvent) => {
		event.preventDefault();
		// @todo - need to figure out the correct way to type an HTML form's fields
		const form = event.target as any;
		getCoordinatesFromAddress(
			{
				city: form.city.value,
				state: form.state.value,
				street: form.street.value,
				zip: form.zip.value,
			},
			(data: GeocoderData) => {
				if (hookChange) {
					hookChange(data.result.addressMatches[0].coordinates);
				}
			}
		);
	};

	return (
		<form className={styles.form} onSubmit={onSubmit}>
			<Label attrs={{ htmlFor: "street" }}>Street</Label>
			<Input attrs={{ id: "street", name: "street", placeholder: "123 Main St." }} />
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
					<Input attrs={{ id: "zip", name: "zip", placeholder: "12345" }} />
				</div>
			</div>

			<Button
				attrs={{ className: styles.button, type: "submit" }}
				kind="primary"
				text="Get location"
			/>
		</form>
	);
};
