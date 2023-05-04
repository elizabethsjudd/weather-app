/** Actual fields used with in the Location Form */
export interface LocationFormFields extends HTMLFormElement {
	city: HTMLInputElement;
	state: HTMLSelectElement;
	street: HTMLInputElement;
	zip: HTMLInputElement;
}

/** LocationForm's input field value types */
export interface AddressFieldValues {
	city: string;
	state: string;
	street: string;
	zip: string;
}

/** Address longitude and latitude */
export interface AddressCoordinates {
	x: number;
	y: number;
}

export interface LocationFormConfig {
	hookChange?: (arg0: AddressCoordinates) => void;
}

interface GeocoderAddress {
	coordinates: AddressCoordinates;
}

export interface GeocoderData {
	errors?: Array<string>;
	result: {
		addressMatches: Array<GeocoderAddress>;
	};
}

/* eslint-disable sort-keys */
// Display to display states in alphabetical order based on their full spelling.
/** Reusable reference to pull all 50 states */
export const USStateValues: Record<string, string> = {
	AL: "Alabama",
	AK: "Alaska",
	AZ: "Arizona",
	AR: "Arkansas",
	CA: "California",
	CO: "Colorado",
	CT: "Connecticut",
	DE: "Delaware",
	FL: "Florida",
	GA: "Georgia",
	HI: "Hawaii",
	ID: "Idaho",
	IL: "Illinois",
	IN: "Indiana",
	IA: "Iowa",
	KS: "Kansas",
	KY: "Kentucky",
	LA: "Louisiana",
	ME: "Maine",
	MD: "Maryland",
	MA: "Massachusetts",
	MI: "Michigan",
	MN: "Minnesota",
	MS: "Mississippi",
	MO: "Missouri",
	MT: "Montana",
	NE: "Nebraska",
	NV: "Nevada",
	NH: "New Hampshire",
	NJ: "New Jersey",
	NM: "New Mexico",
	NY: "New York",
	NC: "North Carolina",
	ND: "North Dakota",
	OH: "Ohio",
	OK: "Oklahoma",
	OR: "Oregon",
	PA: "Pennsylvania",
	RI: "Rhode Island",
	SC: "South Carolina",
	SD: "South Dakota",
	TN: "Tennessee",
	TX: "Texas",
	UT: "Utah",
	VT: "Vermont",
	VA: "Virginia",
	WA: "Washington",
	WV: "West Virginia",
	WI: "Wisconsin",
	WY: "Wyoming",
};
/* eslint-enable sort-keys */
