export interface buttonProps{
	colour?:string;
	border?:string;
	hover?:boolean;
	focus?:boolean;
	// interaction?:boolean;
	// size?:string;
	// hover?:boolean;
	// textColour?:string;
	// shadow?:string;
	// border?:string;
	text?:string;
	other_addons?:string;
}
export interface classAppend {
	containerClass?:string | null;
	buttonClass?:string | null;
}
export interface buttonContainerId { 
	containerId?:string;
	buttonId?:string | null;
}
export interface buttonContainerProps {
	id:buttonContainerId;
	classes:classAppend;
	customised?:buttonProps;
}

export function buttonContainer(props:buttonContainerProps): HTMLElement {
	const	ids = props.id;
	const	classes = props.classes;
	const	customised = props.customised;

	const	button = document.createElement("button");
	const	container = document.createElement("div");

	container.id = `${ids.containerId}`;
	container.className = `${classes.containerClass}`;
	button.id = `${ids.buttonId}`;
	button.className = `ease-out transform transition inline px-6 py-2 m-0 \
						delay 75 duration-200 bg-teal-400 rounded-4xl \
						${classes.buttonClass}`;
	
	if (customised && customised.text)
		button.textContent = `${customised.text}`;
	if (customised)
	{
		if (customised.colour) {
			button.classList.remove(`bg-teal-400`);
			button.classList.add(customised.colour);
		}
		if (customised.border)
			button.classList.add(customised.border);
		if (customised.hover && customised.hover === true)
			button.classList.add("hover:scale-125", "hover:bg-sky-100", "hover:shadow-md");
		if (customised.focus && customised.focus === true)
			button.classList.add("focus:ring-4", "focus:ring-blue-300");
		if (customised.other_addons)
			button.classList.add(`${customised.other_addons}`);
	}

	container.appendChild(button);
	if (container && classes.containerClass)
		return (container);
	return (button);
}

//switch cases
/*
export interface classAppend {
    container:string | null;
    // image:string | null;
    button:string | null;
}
export interface buttonContainerId { 
    container:string;
    // image:string | null;
    button:string | null;
}
export interface buttonContainerProps {
    classAppend:classAppend;
    id:buttonContainerId;
    // imgSrc:string | null;
}

export default function buttonContainer(props:buttonContainerProps): HTMLElement {
    const   ids = props.id;
    const   classes = props.classAppend;
    // const   imgPath = props.imgSrc;
    const   container = document.createElement("div");
    const   button = document.createElement("button");
    // const   image = document.createElement("img");
    container.id = `${ids.container}`;
    button.id = `${ids.button}`;
    // image.id = `${ids.image}`;
    container.className = `${classes.container}`;
    button.className = `ease-out transform transition hover:scale-125 inline 
						delay 75 duration-200 bg-teal-400 px-6 py-2 m-6
						border-2 border-blue-500 hover:border-gray-500 
						hover:hover:text-black hover:opacity-50 hover:shadow-md ${classes.button}`;
    // image.className =  `${classes.image}`;
    // image.src = `${imgPath}`;
    
    //container.appendChild()
    return (button);
}
*/