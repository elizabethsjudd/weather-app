import React from "react";
import { Button } from "../reusable/button";
import { Label } from "../reusable/label";
import { Input } from "../reusable/input";
import { Select } from "../reusable/select";
import { SelectOption } from "../reusable/select-option";

export const LocationForm = (): JSX.Element => {
	// @todo - add error handling
	const onChange = (callback:(data: unknown) => void) => {
		fetch("/api/geocoder/locations/address?street=4600+Silver+Hill+Rd&city=%20Washington&state=DC&zip=20233&benchmark=Public_AR_Census2020&format=json")
			.then((response) => response.json())
			.then((data) => {
				callback(data);
			});
	}

	React.useEffect(() => {
		onChange((data) => {
			console.log(data);
		})
	}, [])

	return (
		<form>
			<Label htmlFor="street">Street</Label>
			<Input id="street" placeholder="123 Main St." />		
			<Label htmlFor="city">City</Label>
			<Input id="city" placeholder="Pleasantville" />		
			<Label htmlFor="state">State</Label>
			<Select attrs={{name: 'state', defaultValue: ''}}>
				<>
					<SelectOption attrs={{value: "", disabled: true}}>Select your state</SelectOption>
					<SelectOption attrs={{value: "AL"}}>Alabama</SelectOption>
					<SelectOption attrs={{value: "AK"}}>Alaska</SelectOption>
					<SelectOption attrs={{value: "AZ"}}>Arizona</SelectOption>
					<SelectOption attrs={{value: "AR"}}>Arkansas</SelectOption>
					<SelectOption attrs={{value: "CA"}}>California</SelectOption>
					<SelectOption attrs={{value: "CO"}}>Colorado</SelectOption>
					<SelectOption attrs={{value: "CT"}}>Connecticut</SelectOption>
					<SelectOption attrs={{value: "DE"}}>Delaware</SelectOption>
					<SelectOption attrs={{value: "FL"}}>Florida</SelectOption>
					<SelectOption attrs={{value: "GA"}}>Georgia</SelectOption>
					<SelectOption attrs={{value: "HI"}}>Hawaii</SelectOption>
					<SelectOption attrs={{value: "ID"}}>Idaho</SelectOption>
					<SelectOption attrs={{value: "IL"}}>Illinois</SelectOption>
					<SelectOption attrs={{value: "IN"}}>Indiana</SelectOption>
					<SelectOption attrs={{value: "IA"}}>Iowa</SelectOption>
					<SelectOption attrs={{value: "KS"}}>Kansas</SelectOption>
					<SelectOption attrs={{value: "KY"}}>Kentucky</SelectOption>
					<SelectOption attrs={{value: "LA"}}>Louisiana</SelectOption>
					<SelectOption attrs={{value: "ME"}}>Maine</SelectOption>
					<SelectOption attrs={{value: "MD"}}>Maryland</SelectOption>
					<SelectOption attrs={{value: "MA"}}>Massachusetts</SelectOption>
					<SelectOption attrs={{value: "MI"}}>Michigan</SelectOption>
					<SelectOption attrs={{value: "MN"}}>Minnesota</SelectOption>
					<SelectOption attrs={{value: "MS"}}>Mississippi</SelectOption>
					<SelectOption attrs={{value: "MO"}}>Missouri</SelectOption>
					<SelectOption attrs={{value: "MT"}}>Montana</SelectOption>
					<SelectOption attrs={{value: "NE"}}>Nebraska</SelectOption>
					<SelectOption attrs={{value: "NV"}}>Nevada</SelectOption>
					<SelectOption attrs={{value: "NH"}}>New Hampshire</SelectOption>
					<SelectOption attrs={{value: "NJ"}}>New Jersey</SelectOption>
					<SelectOption attrs={{value: "NM"}}>New Mexico</SelectOption>
					<SelectOption attrs={{value: "NY"}}>New York</SelectOption>
					<SelectOption attrs={{value: "NC"}}>North Carolina</SelectOption>
					<SelectOption attrs={{value: "ND"}}>North Dakota</SelectOption>
					<SelectOption attrs={{value: "OH"}}>Ohio</SelectOption>
					<SelectOption attrs={{value: "OK"}}>Oklahoma</SelectOption>
					<SelectOption attrs={{value: "OR"}}>Oregon</SelectOption>
					<SelectOption attrs={{value: "PA"}}>Pennsylvania</SelectOption>
					<SelectOption attrs={{value: "RI"}}>Rhode Island</SelectOption>
					<SelectOption attrs={{value: "SC"}}>South Carolina</SelectOption>
					<SelectOption attrs={{value: "SD"}}>South Dakota</SelectOption>
					<SelectOption attrs={{value: "TN"}}>Tennessee</SelectOption>
					<SelectOption attrs={{value: "TX"}}>Texas</SelectOption>
					<SelectOption attrs={{value: "UT"}}>Utah</SelectOption>
					<SelectOption attrs={{value: "VT"}}>Vermont</SelectOption>
					<SelectOption attrs={{value: "VA"}}>Virginia</SelectOption>
					<SelectOption attrs={{value: "WA"}}>Washington</SelectOption>
					<SelectOption attrs={{value: "WV"}}>West Virginia</SelectOption>
					<SelectOption attrs={{value: "WI"}}>Wisconsin</SelectOption>
					<SelectOption attrs={{value: "WY"}}>Wyoming</SelectOption>
				</>
			</Select>
			<Label htmlFor="zip">Zip code</Label>
			<Input id="zip" placeholder="12345" />
			<Button text="Get location" />
		</form>
	);
};
