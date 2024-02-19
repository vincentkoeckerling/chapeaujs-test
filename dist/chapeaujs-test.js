var Chapeau = (function () {
	"use strict";
	function e() {
		console.log("Print from second");
	}
	console.log("Running test ...."), e();
	const n = document.getElementById("test");
	return (n.textContent = "Replaced by Javascript!!!"), { name: "Chapeau", version: "test" };
})();
//# sourceMappingURL=chapeaujs-test.js.map
