import Alpine from "alpinejs";
import "imgix.js";

import "./utils/vh-screen";
import "../css/app.pcss";

// only needed to get apline dev tools working
window.Alpine = Alpine;

// Alpine plugins
imgix.config.host = "soello.imgix.net";
imgix.config.useHttps = true;

// Alpine start
Alpine.start();
