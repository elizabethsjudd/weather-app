import { Dispatch, SetStateAction, createContext } from "react";

export interface LocationContextType {
	coordinates: {
		x: number;
		y: number;
	};
	name: string;
	setCoordinates: Dispatch<
		SetStateAction<{
			x: number;
			y: number;
		}>
	>;
	setName: Dispatch<SetStateAction<string>>;
}

export const LocationContext = createContext({
	coordinates: {
		x: 0,
		y: 0,
	},
	name: "",
	setCoordinates: (x: LocationContextType["coordinates"]) => {
		console.log(x);
	},
	setName: (x: LocationContextType["name"]) => {
		console.log(x);
	},
});
