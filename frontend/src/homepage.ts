import { renderHeader } from "./components/header/header.js";
import { pomodoro_creator } from "./components/button/pomodoro_timer.js"
// import { API_BASE } from "./variable"

//For reference:
//https://tailwind.build/classes
function	homePage_container(): HTMLElement {
	const	welcomeTitle = document.createElement("p");
	welcomeTitle.className = "flex justify-center text-2xl font-bold"
	welcomeTitle.textContent = "Welcome!";
	welcomeTitle.id = "welcome_title";
	const	title = document.createElement("p");
	title.className = "flex justify-center text-2xl font-bold"
	title.textContent = "Ready to start using Pomodoro?";
	title.id = "title";

	const	button = pomodoro_creator();
	//create timer eventlistener
	// const	startButton = buttonContainer({classes:{buttonClass:"flex justify-center"}, id:{buttonId:"Start"}});
	// const	pauseButton = buttonContainer({classes:{buttonClass:"flex justify-center"}, id:{buttonId:"Pause"}});
	// const	resetButton = buttonContainer({classes:{buttonClass:"flex justify-center"}, id:{buttonId:"Reset"}});
	// startButton.addEventListener('click', startTimer);
	// pauseButton.addEventListener('click', pauseTimer);
	// resetButton.addEventListener('click', resetTimer);






	//p(padding) -> space inside the element(between content and border)
	//m(margin) -> space outside of element(between this and other elements)
	const	titleWrapper = document.createElement("div");
	titleWrapper.className = "flex flex-col text-2xl font-bold";

	titleWrapper.append(welcomeTitle, title, button);
	return(titleWrapper);
}

function	header_container_creation(): HTMLElement {
	const	headerbox = document.createElement("div");
	headerbox.className = "grid grid w-full bg-gray-100"
	headerbox.id = "headerbox";

	renderHeader(headerbox);
	return(headerbox);
}

function Home_container_creation(): HTMLElement {
	const	titleWrapper = homePage_container();
	// const	headerbox = headerbox_container();

	//flex-col as column and flex-grow expand to fill all available space left
	const	homePage = document.createElement("div");
	homePage.className = "flex flex-col justify-center items-center text-center";
	homePage.append(titleWrapper);
	return homePage;
}


export function renderHomePage(main_container: HTMLElement, header_container: HTMLElement) {
	const	homePage = Home_container_creation();
	const	header = header_container_creation();
	homePage.className = "py-20"

	main_container.append(homePage);
	header_container.append(header);
}

/*
export function HeaderHome_container(): HTMLElement {
	const	headerbox = document.createElement("div");
	headerbox.className = "flex justify-start";
	const	homePage = document.createElement("div");
	//flex-col as column and flex-grow expand to fill all available space left
	homePage.className = "flex flex-col justify-center items-center flex-grow text-center";

	renderHeader(headerbox);

	const	welcomeTitle = document.createElement("p");
	welcomeTitle.className = "flex justify-center text-2xl font-bold"
	welcomeTitle.textContent = "Welcome!";
	const	title = document.createElement("p");
	title.className = "flex justify-center text-2xl font-bold"
	title.textContent = "Ready to start using Pomodoro?";

	//px(pr + pl)-> left + right
	//py(pt + pb)-> top + bottom
	const	button = document.createElement("button");
	button.className = "ease-out transform transition hover:scale-125 inline \
						delay 75 duration-200 bg-teal-400 px-6 py-2 m-6 \
						border-2 border-blue-500 hover:border-gray-500 \
						hover:hover:text-black hover:opacity-50 hover:shadow-md";

	//p(padding) -> space inside the element(between content and border)
	//m(margin) -> space outside of element(between this and other elements)
	const	titleWrapper = document.createElement("div");
	titleWrapper.className = "flex flex-col text-2xl font-bold";
	const	buttonWrapper = document.createElement("div");
	buttonWrapper.className = "text-2xl font-bold p-6";

	titleWrapper.append(welcomeTitle, title);
	//update title and change background to zen once you press the button:

	homePage.append(titleWrapper, buttonWrapper);
	const	homePageWrapper = document.createElement("div");
	homePageWrapper.className = "flex flex-col min-h-screen";
	homePageWrapper.append(headerbox, homePage);
	return homePageWrapper;
}
*/
























/*
//For reference:
//https://tailwind.build/classes
export async function renderHomePage(container: HTMLElement) {

	renderHeader(container);

	const homePage = document.createElement("div");
	homePage.className = "h-screen flex items-center justify-center flex-col bg-gray-100";

	//title
	const title = document.createElement("h1");
	title.className = "text-2xl font-bold text-center";

	//name of the logged in user
	const user_name = document.createElement("span");
	user_name.className = "text-2xl font-bold underline text-center";
	user_name.textContent = "User";

	const isLoggedIn = localStorage.getItem("id");//get the user id
	if (isLoggedIn) {
		title.append(document.createTextNode("Welcome \""));
		title.append(user_name);//insert name here (test atm)
		title.append(document.createTextNode("\"!"));
		title.append(document.createElement("br"));
		title.append(document.createTextNode("Another Good Day to play pong!"));
	} else {
		title.append(document.createTextNode("Hello!"));
		title.append(document.createElement("br"));
		title.append(document.createTextNode("Start Pomodoro Timer?"));
	}

	const playLink = document.createElement("a");
	playLink.href = "/play";
	playLink.className =
	"w-48 bg-sky-500 text-white px-4 py-2 rounded-md text-center " +
	"hover:bg-sky-600 transition animate-pulse text-sm inline-block";
	playLink.textContent = "Open The Game!";
	
	const tooltipDiv = document.createElement("div");
	tooltipDiv.className =
	"tooltip absolute left-1/2 -translate-x-1/2 mt-1 w-max text-sm text-gray-800 bg-white " +
	"border border-gray-300 rounded shadow-lg px-2 py-1 opacity-0 group-hover:opacity-100 " +
	"transition-opacity duration-200 pointer-events-none transition-all duration-1000";
	tooltipDiv.textContent = "GO AHEAD MR JOESTAR!";

	const wrapper = document.createElement("div");
	wrapper.className = "relative group inline-block";
	wrapper.append(playLink, tooltipDiv);
	homePage.append(title, wrapper);
	container.append(homePage);

return container;
}
*/
