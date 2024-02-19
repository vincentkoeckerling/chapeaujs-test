import { printFromHere } from "./second.js";

console.log("Running Test");

printFromHere();

const element = document.getElementById("test");
element.textContent = "Replaced by Javascript!!";
