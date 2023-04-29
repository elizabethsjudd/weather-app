import { AddressFields, GeocoderData } from "./constants";

// @todo - add error handling
export const getCoordinatesFromAddress = (
	{ street, city, state, zip }: AddressFields,
	callback: (data: GeocoderData) => void
) => {
	fetch(
		`/api/geocoder/locations/address?street=${encodeURIComponent(street)}&city=${encodeURIComponent(
			city
		)}&state=${encodeURIComponent(state)}&zip=${encodeURIComponent(
			zip
		)}&benchmark=Public_AR_Census2020&format=json`
	)
		.then((response) => response.json())
		.then((data) => {
			callback(data);
		});
};
