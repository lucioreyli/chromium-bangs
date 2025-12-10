import { z } from "zod";
import Bun from "bun";

const VERSION = "202512091948";

var protocolRegx = /^(https|http):\/\//;
const bangSchema = z.array(
	z
		.object({
			s: z.string(), //name
			d: z.preprocess((v) => {
				if (!(typeof v === "string")) {
					return v;
				}
				return !protocolRegx.test(v) ? "http://" + v : v;
			}, z.url()),
			u: z.string().startsWith("/").or(z.url()), // search template
			c: z
				.literal([
					"Entertainment",
					"Man Page",
					"Multimedia",
					"News",
					"Online Services",
					"Region search",
					"Research",
					"Shopping",
					"Tech",
					"Translation",
				])
				.optional(), // category
			t: z.string(), // trigger
			ts: z.array(z.string()).catch([]), // aditional triggers
		})
		.transform((bang) => {
			const path = bang.u.replace("{{{s}}}", "%s");
			return {
				s: bang.s,
				t: [bang.t].concat(bang.ts).join(),
				u: (path.startsWith("/") ? bang.d + path : path)
					.replace(protocolRegx, "")
					.replace("www.", ""),
			};
		}),
);

const src = `https://github.com/kagisearch/bangs/raw/refs/tags/${VERSION}/data/bangs.json`;

const main = async () => {
	const res = await fetch(src).then((res) => res.json());
	const { error, data, success } = z.safeParse(bangSchema, res);
	if (!success) {
		return console.error(error);
	}
	await Bun.file("./bangs.json").write(JSON.stringify(data, null, 0));
};

main();
