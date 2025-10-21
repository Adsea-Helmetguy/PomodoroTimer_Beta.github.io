import { buttonContainer } from "./button.js";

//use this:
//https://tailwindcss.com/docs

//time
const	timeforpomodoro = 1; //25 * 60
let timeLeft = 1; //default, 25mins
let timer: number | null = null;

let	pomodoro_counter = 0;
// let	shortrest_counter = 0;
// let	longrest_counter = 0; //if pomodoro is % by 4, longrest activates

function	timerDisplay_function(): HTMLElement {
	const timerDisplay = document.createElement("div");
	timerDisplay.id = "timer";
	timerDisplay.className = "flex justify-center items-center text-bold text-9xl";

	//when Math.floor returns a value, then next '.command' will execute,
	// Which in this case it's '.toString' which converts number to string
	// *1) and then to pad to always show two sets of characters
	// const	mins = Math.floor(timeLeft / 60).toString().padStart(2, '0');
	const	mins = Math.floor(timeLeft / 60).toString().padStart(2, '0');
	const	secs = Math.floor(timeLeft % 60).toString().padStart(2, '0');
	timerDisplay.textContent = `${mins}:${secs}`;

	return (timerDisplay);
}

function	update_timerDisplay() {
	const timerDisplay = document.getElementById("timer");
	if (timerDisplay) {
		const mins = Math.floor(timeLeft / 60).toString().padStart(2, '0');
		const secs = Math.floor(timeLeft % 60).toString().padStart(2, '0');
		timerDisplay.textContent = `${mins}:${secs}`;
	}
}

function	stopTimer(button: Element) {
	if (timer) {
		clearInterval(timer);
		timer = null;
	}
	timeLeft = timeforpomodoro;
	update_timerDisplay();
	alert('Pomodoro complete! Time to take a break!');

	const	stopbutton_add_hidden = document.getElementById("stop_container");
	if (stopbutton_add_hidden)
		stopbutton_add_hidden?.classList.add("hidden");

	button.textContent = "Start";
	button.classList.remove("text-green-600", "text-yellow-600");
	button.classList.add("text-sky-600");
}

function	countdown(button: Element) {
	timeLeft--;
	update_timerDisplay();
	if (timeLeft < 0) {
		pomodoro_counter++;
		stopTimer(button);
	}
}

function	pauseTimer(button: Element) {
	if (timer) {
		clearInterval(timer);
		timer = null;
		button.textContent = "Resume";
		button.classList.remove("text-green-600", "text-yellow-600");
		button.classList.add("text-sky-600");
		update_timerDisplay();
		return;
	}
		
}

function	startTimer(button: Element) {
	if (timer)
		return;
	button.textContent = "Pause";
	button.classList.remove("text-green-600", "text-yellow-600");
	button.classList.add("text-sky-600");
	update_timerDisplay();
	timer = setInterval(() => countdown(button), 1000);
}

function	pomodoro_stop_Timer(reset_start: Element) {
	stopTimer(reset_start);
}

function	pomodoro_startpause_Timer(button: Element) {
	const	currentState = button.textContent;
	const	stopbutton_remove_hidden = document.getElementById("stop_container");
	if (stopbutton_remove_hidden)
		stopbutton_remove_hidden?.classList.remove("hidden");

	if (currentState === "Start") {
		startTimer(button);
	}
	else if (currentState === "Pause") {
		pauseTimer(button);
	}
	else if (currentState === "Resume") {
		startTimer(button); // resume same as start
	}
	else if (currentState === "Stop") {
		stopTimer(button);
	}
}

export function pomodoro_creator(): HTMLElement {
	//https://tailwindcss.com/docs/background-color
	const	pomodoro_Container = buttonContainer({classes:{containerClass:"p-2", buttonClass:"flex justify-center"}, id:{containerId:"pomodoro_container", buttonId:"Pomodoro"}, customised:{text: "Pomodoro", colour: "text-sky-600", hover: true}});
	const   shortrest_Container = buttonContainer({classes:{containerClass:"p-2", buttonClass:"flex justify-center"}, id:{containerId:"shortrest_container", buttonId:"shortrest"}, customised:{text: "Rest", colour: "text-green-600", hover: true}});
	const	longrest_Container = buttonContainer({classes:{containerClass:"p-2", buttonClass:"flex justify-center"}, id:{containerId:"longrest_container", buttonId:"longrest"}, customised:{text: "Long break", colour: "text-red-600", hover: true}});
	const	start_pause_Container = buttonContainer({classes:{containerClass:"p-0", buttonClass:"flex justify-center"}, id:{containerId:"start_pause_container", buttonId:"start_pause_button"}, customised:{text: "Start", colour: "text-sky-600", border: "border-3", hover: true, focus: true}});
	const	stop_Container = buttonContainer({id:{containerId:"stop_container", buttonId:"stop_button"}, classes:{containerClass:"hidden ps-10", buttonClass:"flex justify-center"}, customised:{text: "Stop", colour: "text-red-600", border: "border-3", hover: true, focus: true}});

	const	timerDisplay = timerDisplay_function();

	// startButton.addEventListener('click', startTimer);
	// shortrest_Button.addEventListener('click', shortrest_Button);
	// longrest_Button.addEventListener('click', longrest_Button);
	const	start_pause_button = start_pause_Container.querySelector("#start_pause_button"); // ✅ 1. Find the actual button inside the container
	const	stop_button = stop_Container.querySelector("#stop_button");
	if (start_pause_button) {
		start_pause_Container.addEventListener('click', () => pomodoro_startpause_Timer(start_pause_button)); // ✅ 2. Add the listener directly to that button
	} 
	if (stop_button && start_pause_button) {
		stop_Container.addEventListener('click', () => pomodoro_stop_Timer(start_pause_button));
	}

	const	two_button_container = document.createElement("div");
	two_button_container.id = "start_pause_stop";
	two_button_container.className = "flex flex-row justify-center";
	two_button_container.append(start_pause_Container, stop_Container);

	const	pomodoro = document.createElement("div");
	pomodoro.id = "pomodoro";
	pomodoro.className = "flex flex-col p-2 space-y-10";

	const	pomodoro_header = document.createElement("div");
	pomodoro_header.id = "pomodoro";
	pomodoro_header.className = "flex flex-row justify-center";
	pomodoro_header.append(pomodoro_Container , shortrest_Container, longrest_Container);

	pomodoro.append(pomodoro_header, timerDisplay, two_button_container);
	return (pomodoro);
}





// //time
// let timeLeft = 25 * 60; //default, 25mins
// let timer: number | null = null;

// const	startButton = buttonContainer({classes:{buttonClass:"flex justify-center"}, id:{buttonId:"Start"}});
// const   pauseButton = buttonContainer({classes:{buttonClass:"flex justify-center"}, id:{buttonId:"Pause"}});
// const	resetButton = buttonContainer({classes:{buttonClass:"flex justify-center"}, id:{buttonId:"Reset"}});

// const timerDisplay = document.createElement("div");
// // timerDisplay.className = ""
// timerDisplay.id = "timer";
// timerDisplay.textContent = "25:00";




// // document.body.appendChild(timerDisplay);

// startButton.addEventListener('click', startTimer);
// pauseButton.addEventListener('click', pauseTimer);
// resetButton.addEventListener('click', resetTimer);





/*
Links:
*1) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
*/