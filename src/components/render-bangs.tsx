import { tokens } from "@/tokens.stylex";
import type { Bang } from "@/types";
import { useEffect, useState } from "react";

export const RenderBangs = () => {
	const [data, setData] = useState<Bang[]>([]);

	useEffect(() => {
		const fetchBangs = async () => {
			const res = await fetch(
				"https://raw.githubusercontent.com/lucioreyli/chromium-bangs/refs/heads/main/data/bangs.json",
			)
				.then((r) => r.json())
				.catch(console.error);
			setData(res);
		};
		fetchBangs();
	}, []);
	return (
		<>
			{data.slice(10, 15).map((b, i) => {
				let url: URL | undefined;
				try {
					url = new URL("https://" + b.u);
				} finally {
				}

				return (
					<div key={b.s + i}>
						<div
							style={{
								transition: "all",
								width: "2rem",
								height: "2rem",
								backgroundColor: `oklch(${tokens.fg})`,
								borderRadius: `0.5rem`,
							}}
						>
							<img
								width={32}
								alt="icon"
								src={`https://icons.duckduckgo.com/ip3/${url?.host || ""}.ico`}
							/>
						</div>
						<span>{b.s}</span>
					</div>
				);
			})}
		</>
	);
};
