import type { Meta, StoryObj } from "@storybook/react";
import { CollapsibleSection } from "./index";
import { BsSquare } from "react-icons/bs";

const meta: Meta<typeof CollapsibleSection> = {
	args: {},
	argTypes: {},
	component: CollapsibleSection,
	title: "Reusable/CollapsibleSection",
};

export default meta;
type Story = StoryObj<typeof CollapsibleSection>;

export const Default: Story = {
	render: () => (
		<>
			<CollapsibleSection slotIcon={<BsSquare />} slotTitle="Meow" state="close">
				<p>
					Knock dish off table head butt cant eat out of my own dish hack, so your pillow is now my
					pet bed. And sometimes switches in french and say &ldquo;miaou&rdquo; just because well
					why not eats owners hair then claws head. Roll on the floor purring your whiskers off eat
					an easter feather as if it were a bird then burp victoriously, but tender yet scratch at
					door to be let outside, get let out then scratch at door immmediately after to be let back
					in for spread kitty litter all over house chase laser pushes butt to face. Present belly,
					scratch hand when stroked cat playing a fiddle in hey diddle diddle? yet kitty time or i
					is playing on your console hooman or i just saw other cats inside the house and nobody ask
					me before using my litter box play with twist ties. Hate dog. Sleep i want to go outside
					let me go outside nevermind inside is better, but human give me attention meow in the
					middle of the night i crawl onto your chest and purr gently to help you sleep litter box
					is life sleep nap. Crusty butthole lick the other cats please stop looking at your phone
					and pet me or hide at bottom of staircase to trip human jump up to edge of bath, fall in
					then scramble in a mad panic to get out please let me outside pouty face yay! wait,
					it&apos;s cold out please let me inside pouty face oh, thank you rub against mommy&apos;s
					leg oh it looks so nice out, please let me outside again the neighbor cat was mean to me
					please let me back inside. Nyan fluffness ahh cucumber! cats woo so if human is on laptop
					sit on the keyboard so meow so lick the plastic bag. Break lamps and curl up into a ball i
					dreamt about fish yum! yet if human is on laptop sit on the keyboard or murr i hate humans
					they are so annoying so paw your face to wake you up in the morning catasstrophe but i
					hate cucumber pls dont throw it at me. Growl at dogs in my sleep hate dog, so make
					muffins. Mrow rub my belly hiss. Eat half my food and ask for more my left donut is
					missing, as is my right steal the warm chair right after you get up. I love cuddles do not
					try to mix old food with new one to fool me!. Pet me pet me don&apos;t pet me poop in the
					plant pot prow?? ew dog you drink from the toilet, yum yum warm milk hotter pls, ouch too
					hot i can haz sleep all day whilst slave is at work, play all night whilst slave is
					sleeping. Do doodoo in the litter-box, clickityclack on the piano, be frumpygrumpy chew
					the plant meow go back to sleep owner brings food and water tries to pet on head, so
					scratch get sprayed by water because bad cat, ptracy russian blue for i is not fat, i is
					fluffy purr like a car engine oh yes, there is my human slave woman she does best pats
					ever that all i like about her hiss meow . Look at dog hiiiiiisssss if it fits, i sits
					furball roll roll roll. Kitten is playing with dead mouse cat fur is the new black but ask
					to be pet then attack owners hand for stand with legs in litter box, but poop outside. Pee
					on walls it smells like breakfast lie in the sink all day flex claws on the human&apos;s
					belly and purr like a lawnmower. Meowsiers rub butt on table but good now the other hand,
					too for the cat was chasing the mouse toy mouse squeak roll over, for loved it, hated it,
					loved it, hated it.
				</p>
			</CollapsibleSection>
		</>
	),
};
