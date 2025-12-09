import * as stylex from "@stylexjs/stylex";
import { Button } from "./components/ui/button.tsx";
import { GitHubIcon } from "./assets/icons/github-icon.tsx";
import { ReadmeIcon } from "@/assets/icons/readme-icon.tsx";
import { SpinnerIcon } from "@/assets/icons/spinner-icon.tsx";

const animateSpin = stylex.keyframes({
	to: { transform: "rotate(360deg)" },
});
const styles = stylex.create({
	title: {
		fontWeight: 600,
		margin: 0,
		padding: 0,
	},
	icon: {
		width: 24,
		height: 24,
		animationName: animateSpin,
		animationIterationCount: "infinite",
		animationTimingFunction: "linear",
		animationDuration: "1.5s",
	},
	desc: {
		display: "block",
		fontSize: "0.875rem",
		margin: "0.5rem 0",
	},
});

export function App() {
	const str = "Chromium (search)Bangs";
	return (
		<main>
			<nav>
				<Button size="sm">
					<GitHubIcon width="1.5rem" height="1rem" />
					View on GitHub
				</Button>
			</nav>
			<SpinnerIcon {...stylex.props(styles.icon)} />
			<h1 {...stylex.props(styles.title)}>{str}</h1>
			<span {...stylex.props(styles.desc)}>chromium site search list</span>
			<div style={{}}>
				<Button size="sm">
					<ReadmeIcon width={16} />
					How to add
				</Button>
			</div>
			<h1>{str}</h1>
			<Button onClick={() => console.log("enabled")} size="sm">
				hello world
			</Button>
			<Button onClick={() => console.log("enabled")}>
				I Can't Feel My Legs
			</Button>
			<Button disabled onClick={() => console.log("disabled")}>
				I Can't Feel My Legs
			</Button>
		</main>
	);
}
