import type { Meta, StoryObj } from "@storybook/react";
import { TooltipContent } from "./index";
import { TooltipContentConfig } from "./constants";
import styles from "./tooltip-content.module.scss";

interface StoryArgs extends TooltipContentConfig {
	height: number;
	width: number;
}

const meta: Meta<StoryArgs> = {
	args: {
		height: 20,
		state: "show",
		text: "Tooltip Content",
		width: 20,
	},
	argTypes: {
		text: {
			control: { type: "text" },
		},
	},
	component: TooltipContent,
	title: "Reusable/Tooltip Content",
};

export default meta;
type Story = StoryObj<StoryArgs>;

export const Default: Story = {
	render: (args) => {
		return (
			<div className={styles.wrapper} style={{ margin: "7rem" }}>
				<span
					style={{
						background: "gray",
						display: "block",
						height: `${args.height}px`,
						width: `${args.width}px`,
					}}
				/>
				<TooltipContent {...args} />
			</div>
		);
	},
};
