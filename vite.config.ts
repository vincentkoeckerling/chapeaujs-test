import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
	build: {
		sourcemap: true,
		lib: {
			entry: resolve(__dirname, "src/main.js"),
			formats: ["iife"],
			name: "Chapeau",
			fileName: () => "chapeaujs-test.js",
		},
	},
});
