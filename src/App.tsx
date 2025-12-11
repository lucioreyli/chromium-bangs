import * as stylex from "@stylexjs/stylex";
import { SearchBangs } from "./components/search-bangs.tsx";
import { tokens } from "./tokens.stylex";
import { NavHeader } from "./components/nav-header.tsx";

const styles = stylex.create({
	headerContainer: {
		width: "fit-content",
		textAlign: "center",
		margin: "0 auto",
	},
	title: {
		fontSize: "4rem",
		fontWeight: 500,
		padding: 0,
		margin: "1.25rem 0",
	},
	desc: {
		color: `oklch(${tokens.mutedFg})`,
		fontSize: "1rem",
		margin: "0.5rem 0",
	},
});

export function App() {
	return (
		<main>
			<NavHeader />
			<header {...stylex.props(styles.headerContainer)}>
				<h1 {...stylex.props(styles.title)}>Chromium Bangs</h1>
				<span {...stylex.props(styles.desc)}>
					A collection of chromium site (search) bangs list.
				</span>
				<br />
				<span {...stylex.props(styles.desc)}>Based on Kagi Search Bangs.</span>
				<br />
				<span {...stylex.props(styles.desc)}>
					Compatible with: Chrome, Brave, Arc, Chromium, Ungoogled Chromium...
				</span>
			</header>
			<SearchBangs />
		</main>
	);
}
