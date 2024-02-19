import { second } from "./second.js";

console.log("Running test ....");

second();

const element = document.getElementById("test");
element.textContent = "Replaced by Javascript!!!";

export default {
	name: "Chapeau",
	version: "test",
};
