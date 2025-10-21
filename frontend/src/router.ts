// import { renderLoginPage } from "./login.js";
import { renderHomePage } from "./homepage.js";
// import { renderSignUpPage } from "./signup";
// import { renderProfilePage } from "./profile.js";
// import { renderFriendsPage } from "./friends.js";
// import { statsProfile } from "./stats.js";
// import { renderGameModes } from "./pong/ui/gameMode.js";
// import { marcus_renderProfilePage } from "./marcus_profile.js"


export function renderApp() {
	const app = document.getElementById("app")!;
	const app_header = document.getElementById("app_header")!;
	app.innerHTML = "";
	app_header.innerHTML = "";

	const path = window.location.pathname;
	if (path === '/') {
		renderHomePage(app, app_header);
	}
}
