import * as stylex from "@stylexjs/stylex";
import { Button } from "./components/ui/button.tsx";
import { GitHubIcon } from "./assets/icons/github-icon.tsx";
import { SearchBangs } from "./components/search-bangs.tsx";
import { tokens } from "./tokens.stylex";

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
			<nav>
				<Button variant="link" asChild size="sm">
					<a
						href="https://github.com/lucioreyli/chromium-bangs"
						target="_blank"
						rel="noreferrer"
					>
						<GitHubIcon width="1.5rem" height="1rem" />
						View on GitHub
					</a>
				</Button>
				<Button size="sm">How To Add</Button>
			</nav>
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
