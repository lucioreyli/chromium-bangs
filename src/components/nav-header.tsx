import { GitHubIcon } from "@/assets/icons/github-icon";
import { Button } from "./ui/button";

export const NavHeader = () => (
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
);
