import { buttonContainer } from "./button.js";

//use this:
//https://tailwindcss.com/docs

//time
const	timeforpomodoro = 25 * 60;
let timeLeft = 25 * 60; //default, 25mins
let timer: number | null = null;

function	timerDisplay_function(): HTMLElement {
	const timerDisplay = document.createElement("div");
	timerDisplay.id = "timer";

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

function	stopTimer(button: HTMLElement) {
	if (timer) {
		alert('Pomodoro complete! Time to take a break!');
		clearInterval(timer);
		timer = null;
		timeLeft = timeforpomodoro;
		button.textContent = "Start";
		update_timerDisplay();
	}
}

function	countdown(button: HTMLElement) {
	timeLeft--;
	update_timerDisplay();
	if (timeLeft <= 0)
		stopTimer(button);
}

function	startTimer(button: HTMLElement) {
	if (timer)
		return;
	button.textContent = "Stop";
	update_timerDisplay();
	timer = setInterval(() => countdown(button), 1000);
}

function	pomodoro_Timer(button: HTMLElement) {
	if (timer)
	{
		stopTimer(button); // if timer isn't null, stop here
		return;
	}
	startTimer(button);
}

export function pomodoro_creator(): HTMLElement {
	//https://tailwindcss.com/docs/background-color
	const	pomodoro_Button = buttonContainer({classes:{containerClass:"p-2", buttonClass:"flex justify-center"}, id:{buttonId:"Pomodoro"}, customised:{text: "Pomodoro", colour: "text-sky-600", hover: true}});
	const   shortrest_Button = buttonContainer({classes:{containerClass:"p-2", buttonClass:"flex justify-center"}, id:{buttonId:"shortrest"}, customised:{text: "Rest", colour: "text-green-600", hover: true}});
	const	longrest_Button = buttonContainer({classes:{containerClass:"p-2", buttonClass:"flex justify-center"}, id:{buttonId:"longrest"}, customised:{text: "Long break", colour: "text-red-600", hover: true}});
	const	start_cancel_Button = buttonContainer({classes:{containerClass:"p-0 inline", buttonClass:"flex justify-center"}, id:{buttonId:"Pomodoro_Button"}, customised:{text: "Start", colour: "text-sky-600", border: "border-3", hover: true, focus: true}});
	const	timerDisplay = timerDisplay_function();

	// startButton.addEventListener('click', startTimer);
	// shortrest_Button.addEventListener('click', shortrest_Button);
	// longrest_Button.addEventListener('click', longrest_Button);
	start_cancel_Button.addEventListener('click', () => pomodoro_Timer(start_cancel_Button));


	const	pomodoro = document.createElement("div");
	pomodoro.id = "pomodoro";
	pomodoro.className = "flex flex-col p-2 space-y-10";

	const	pomodoro_buttons = document.createElement("div");
	pomodoro_buttons.id = "pomodoro";
	pomodoro_buttons.className = "flex flex-row justify-center";
	pomodoro_buttons.append(pomodoro_Button , shortrest_Button, longrest_Button);

	pomodoro.append(pomodoro_buttons, timerDisplay, start_cancel_Button);
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