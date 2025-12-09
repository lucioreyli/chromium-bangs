import * as stylex from "@stylexjs/stylex";
import { tokens } from "../../tokens.stylex";

const styles = stylex.create({
	base: {
		margin: 0,
		display: "inline-flex",
		gap: "0.5rem",
		alignItems: "center",
		justifyContent: "center",
		textAlign: "center",

		fontWeight: 500,
		color: `oklch(${tokens.fg})`,
		borderRadius: "0.35rem",
		transitionProperty: "all",
		transition: "outline 150ms ease-in-out",
		outlineColor: `oklch(${tokens.primary} / 0.5)`,
		outline: {
			":focus-visible": "3px solid",
		},
		fontSize: "0.875rem",
	},
	default: {
		backgroundColor: {
			default: `oklch(${tokens.primary})`,
			":hover": `oklch(${tokens.primary} / 0.9)`,
		},
		borderWidth: "0.5px",
		borderStyle: "solid",
		borderColor: `oklch(${tokens.fg} / 0.175)`,
	},
	disabled: {
		pointerEvents: "none",
		opacity: 0.5,
	},
});

const sizes = stylex.create({
	default: {
		padding: "0.5rem 0.75rem",
	},
	sm: { padding: "0.5rem" },
});

type Variants = {
	variant?: Exclude<keyof typeof styles, "base" | "disabled">;
	size?: keyof typeof sizes;
};

export const Button = ({
	style,
	size = "default",
	variant = "default",
	...props
}: React.ComponentProps<"button"> & Variants) => {
	return (
		<button
			{...props}
			{...stylex.props(
				styles.base,
				styles[variant],
				sizes[size],
				(props.disabled || props["aria-disabled"]) && styles.disabled,
			)}
		/>
	);
};
