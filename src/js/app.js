import Alpine from "alpinejs";
import lazySizes from "lazysizes";

import "./utils/vh-screen";
import "../css/app.pcss";
import document from "./components/document";

// only needed to get apline dev tools working
window.Alpine = Alpine;

// Alpine plugins

// Alpine data
Alpine.data("document", document);

// Alpine start
Alpine.start();
init();

/* Define init function */
function init() {
	vhFix();
}
