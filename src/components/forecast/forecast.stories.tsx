import type { Meta, StoryObj } from "@storybook/react";
import { Forecast } from "./index";
import { AddressCoordinates } from "../location-form/constants";

interface StoryConfig {
	location: string;
}

const meta: Meta<StoryConfig> = {
	args: {
		location: "Angel's stadium",
	},
	argTypes: {
		location: {
			control: { type: "select" },
			options: ["Angel's stadium", "Yankee's stadium", "White Sox' stadium"],
		},
	},
	title: "App components/Forecast",
};

export default meta;
type Story = StoryObj<StoryConfig>;

export const Default: Story = {
	render: (args) => {
		const coordOptions: Record<string, AddressCoordinates> = {
			"Angel's stadium": { x: -117.88916348167601, y: 33.79970410658053 },
			"White Sox' stadium": { x: -87.63619391438493, y: 41.83087646225305 },
			"Yankee's stadium": { x: -73.92827415319051, y: 40.82905646403521 },
		};
		return <Forecast coordinates={coordOptions[args.location]} />;
	},
};
