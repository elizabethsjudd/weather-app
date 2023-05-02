import { InputConfig, allowedValues } from "./constants";
import type { Meta, StoryObj } from "@storybook/react";
import { BsSearch } from "react-icons/bs";
import { Input } from "./index";
import { Label } from "../label";

const meta: Meta<typeof Input> = {
	args: {
		placeholder: "Search",
		type: "search",
	} as Omit<InputConfig["attrs"], "name" | "id">,
	argTypes: {
		placeholder: {
			control: { type: "text" },
		},
		type: {
			control: { type: "select" },
			options: allowedValues.types,
		},
	} as Omit<InputConfig["attrs"], "name" | "id">,
	component: Input,
	title: "Reusable/Input",
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
	render: (args) => (
		<>
			<Label attrs={{ htmlFor: "meow" }}>Label</Label>
			<Input attrs={{ id: "meow", name: "foo", ...args }} slotPersistentIcon={<BsSearch />} />
		</>
	),
};
