import { SearchIcon } from "@/assets/icons/search-icon";
import { tokens } from "../tokens.stylex";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
	container: {
		display: "flex",
		placeItems: "center",
		placeContent: "center",
		margin: "0 auto",
		width: "100%",
	},
	icon: {
		width: "2.5rem",
		height: "2.5rem",
		marginTop: "0.75rem",
		marginLeft: "1rem",
		position: "absolute",
		pointerEvents: "none",
	},
	inputContainer: {
		position: "relative",
		margin: "2rem 0",
	},
	input: {
		display: "inline-flex",
		alignItems: "center",
		"::placeholder": {
			fontSize: "1.5rem",
			color: `oklch(${tokens.fg}/ 0.45)`,
		},
		color: `oklch(${tokens.fg})`,
		backgroundColor: `oklch(${tokens.fg}/0.01)`,
		width: "calc(85%)",
		transition: "all 150ms ease-in-out",
		borderStyle: "solid",
		borderWidth: "1px",
		borderRadius: "0.875rem",
		outlineColor: `oklch(${tokens.primary} / 0.5)`,
		outline: {
			":focus-visible": "3px solid",
		},
		padding: "1.2rem 4.5rem",
		paddingRight: "1.2rem",
		fontSize: "1.5rem",
	},
});

export const SearchBangs = () => {
	return (
		<div {...stylex.props(styles.container)}>
			<div {...stylex.props(styles.inputContainer)}>
				<SearchIcon {...stylex.props(styles.icon)} />
				<input
					placeholder="Search by name or URL"
					{...stylex.props(styles.input)}
				/>
			</div>
		</div>
	);
};
