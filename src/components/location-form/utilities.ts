import {
	APIError,
	GenericCallbackFunction,
	fetchAPIRequest,
} from "../../foundations/scripts/utilities";
import { AddressFields, GeocoderData } from "./constants";

export const getCoordinatesFromAddress = async (
	{ street, city, state, zip }: AddressFields,
	callback: (data: GeocoderData | APIError) => void
) => {
	fetchAPIRequest(
		`/api/geocoder/locations/address?street=${encodeURIComponent(
			street.trim()
		)}&city=${encodeURIComponent(city.trim())}&state=${encodeURIComponent(
			state.trim()
		)}&zip=${encodeURIComponent(zip.trim())}&benchmark=Public_AR_Current&format=json`,
		callback as GenericCallbackFunction
	);
};
