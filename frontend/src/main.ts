// import {  } from "./Todolist.js"
import { renderApp } from "./router.js"
import { pomodoro_creator } from "./components/button/pomodoro_timer.js";

window.addEventListener("DOMContentLoaded", renderApp);
window.addEventListener("popstate", renderApp);

window.addEventListener("DOMContentLoaded", () => {
	const app = document.getElementById("app");
	const app_header = document.getElementById("app_header");
	if (app && app_header && !document.getElementById("pomodoro")) {
		app.append(pomodoro_creator());
		app_header.append(pomodoro_creator());
	}
});

/*
window.addEventListener('click', (e: Event) => {
	const target = e.target as HTMLElement;
	const anchor = target.closest('a');

	if (anchor && anchor.href.startsWith(window.location.origin)) {
		e.preventDefault();

		const href = anchor?.getAttribute('href');
		if (href) {
			history.pushState({}, '', href);
			renderApp();
		}
	}
});

window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const userId = params.get("userId");

  if (userId) {
    localStorage.setItem("id", userId);
    window.history.replaceState({}, document.title, "/");
	renderApp();
  }
});
*/
