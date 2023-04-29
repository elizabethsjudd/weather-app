import { createContext } from 'react';

interface LocationContextType {
    coordinates: {
        x: number,
        y: number,
    },
    setCoordinates: Function,
    name: string,
    setName: Function
}

export const LocationContext = createContext({
    coordinates: {
        x: 0,
        y: 0,
    },
    setCoordinates: (x: LocationContextType["coordinates"]) => {
        console.log(x);
    },
    name: '',
    setName: (x: LocationContextType["name"]) => {
        console.log(x);
    },
});
