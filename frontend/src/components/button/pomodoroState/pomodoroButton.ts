import { meowMp3, NotifyToast_header } from "../pomodoroHelper/pomodoro_helper.js";

//time
const	timeforPomodoro = 1; //25 * 60
let timeLeft = 1; //default, 25mins
let timer: number | null = null;

//counter
let	pomodoro_counter = 0;
// let	shortrest_counter = 0;
// let	longrest_counter = 0; //if pomodoro is % by 4, longrest activates

export function timerDisplay_function(): HTMLElement {
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

function resetTimer() {
	if (timer) {
		clearInterval(timer);
		timer = null;
	}
	timeLeft = timeforPomodoro;
	update_timerDisplay();
}

function	stopTimer(button: Element, pomodoro: HTMLButtonElement, rest: HTMLButtonElement, longrest: HTMLButtonElement) {
	resetTimer();

	const	stopbutton_add_hidden = document.getElementById("stop_container");
	if (stopbutton_add_hidden)
		stopbutton_add_hidden?.classList.add("hidden");

	button.textContent = "Start";
	button.classList.remove("text-green-600", "text-sky-600", "text-yellow-600");
	button.classList.add("text-sky-600");
	enableAll(pomodoro, rest, longrest);
}

function	countdown(button: Element, pomodoro: HTMLButtonElement, rest: HTMLButtonElement, longrest: HTMLButtonElement) {
	timeLeft--;
	update_timerDisplay();
	if (timeLeft < 0) {
        timeLeft = 0;
		pomodoro_counter++;
		meowMp3();
		NotifyToast_header("Pomodoro complete! 🎉 Time to take a break! 😺", 3000);
        stopTimer(button, pomodoro, rest, longrest);;
	}
}

function	pauseTimer(button: Element) {
	if (timer) {
		clearInterval(timer);
		timer = null;
		button.textContent = "Resume";
		button.classList.remove("text-sky-600", "text-yellow-600");
		button.classList.add("text-yellow-600");
		update_timerDisplay();
		return;
	}
		
}

function	startTimer(button: Element, pomodoro: HTMLButtonElement, rest: HTMLButtonElement, longrest: HTMLButtonElement) {
	if (timer)
		return;
	button.textContent = "Pause";
	button.classList.remove("text-sky-600", "text-yellow-600");
	button.classList.add("text-sky-600");
	update_timerDisplay();
	timer = setInterval(() => countdown(button, pomodoro, rest, longrest), 1000);
}

export function	pomodoro_stop_Timer(reset_start: Element, pomodoro: HTMLButtonElement, rest: HTMLButtonElement, longrest: HTMLButtonElement) {
	stopTimer(reset_start, pomodoro, rest, longrest);
}

export function	pomodoro_startpause_Timer(button: Element, pomodoro: HTMLButtonElement, rest: HTMLButtonElement, longrest: HTMLButtonElement) {
	const	currentState = button.textContent;
	const	stopbutton_remove_hidden = document.getElementById("stop_container");

	disableAll(pomodoro, rest, longrest);

	if (stopbutton_remove_hidden)
		stopbutton_remove_hidden?.classList.remove("hidden");

	if (currentState === "Start") {
		startTimer(button, pomodoro, rest, longrest);
	}
	else if (currentState === "Pause") {
		pauseTimer(button);
	}
	else if (currentState === "Resume") {
		startTimer(button, pomodoro, rest, longrest); // resume same as start
	}
	else if (currentState === "Stop") {
		stopTimer(button, pomodoro, rest, longrest);
	}
}

//const googleBtn = document.createElement("button");
function disableAll(pomodoro: HTMLButtonElement, rest: HTMLButtonElement, longrest: HTMLButtonElement) {
        pomodoro.disabled = true;
        rest.disabled = true;
		longrest.disabled = true;
        pomodoro.classList.add("opacity-50", "cursor-not-allowed");
        rest.classList.add("opacity-50", "cursor-not-allowed");
		longrest.classList.add("opacity-50", "cursor-not-allowed");
}

function enableAll(pomodoro: HTMLButtonElement, rest: HTMLButtonElement, longrest: HTMLButtonElement) {
        pomodoro.disabled = false;
        rest.disabled = false;
		longrest.disabled = false;
        pomodoro.classList.remove("opacity-50", "cursor-not-allowed")
        rest.classList.remove("opacity-50", "cursor-not-allowed")
		longrest.classList.remove("opacity-50", "cursor-not-allowed")
}
