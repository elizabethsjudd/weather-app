import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button";
import Link from "next/link";
import { Modal } from "./index";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof Modal> = {
	component: Modal,
	title: "Reusable/Modal",
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
	render: (args) => (
		<>
			<Modal
				attrs={{ id: "meow" }}
				hookClose={action("toggle changed value")}
				slotFooter={
					<>
						<Button kind="secondary" text="Cancel" />
						<Button kind="primary" text="Continue" />
					</>
				}
				slotHeading={"Sit and stare chew the plant"}
				state={args.state}
			>
				<p>
					Cat ipsum dolor sit amet, i am the best. Chew the plant mess up all the toilet paper cough
					hairball, eat toilet paper meowing non stop for food. Jump on human and sleep on her all
					night long be long in the bed, purr in the morning and then give a bite to every human
					around for not waking up request <Link href="/">food</Link>, purr loud scratch the walls,
					the floor, the windows, the humans eat prawns daintily with a claw then lick paws clean
					wash down prawns with a lap of carnation milk then retire to the warmest spot on the couch
					to claw at the fabric before taking a catnap or bite plants for is good you understand
					your place in my world sleep all day whilst slave is at work, play all night whilst slave
					is sleeping so this cat happen now, it was too purr-fect!!! so stare at ceiling light.{" "}
					<Link href="/">Cats are awesome!</Link>
				</p>
			</Modal>
		</>
	),
};
