import * as YtEmbed from "./yt_embed.js";
import { loadMaps } from "./gm_embed.js";

function main() {
	const isDevAlreadyActive = window.CHAPEAU_DEV;
	if (isDevAlreadyActive) return;

	if (import.meta.env.DEV) {
		window.CHAPEAU_DEV = true;
	}

	YtEmbed.initialize();
}

main();

export default {
	loadVideos: YtEmbed.loadVideos,
	loadMaps,
};
