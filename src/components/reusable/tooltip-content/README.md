# Tooltip Content component

Reusable sub-component to display a tooltip. For accessibility considerations, this component should not be used in isolation within an application. Instead it should be a part of another component such as the Icon Button or a basic tooltip component.

It supports various different positions but for the MVP will be cut off if the parent is overflow hidden and the position allows the tooltip to extend past the parent (or viewport) bounds.
