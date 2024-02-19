import { resolve } from "path";
import { build } from "vite";

async function buildEntry(entryName, entryPath) {
	/** @type {import("vite").BuildOptions} */
	const options = {
		sourcemap: true,
		lib: {
			entry: entryPath,
			formats: ["iife"],
			name: "Chapeau",
			fileName: () => `${entryName}.js`,
		},
	};

	await build({
		configFile: false,
		build: options,
	});
}

await Promise.all([buildEntry("main", "./src/main.js"), buildEntry("yt_embed", "./src/yt_embed.js")]);
