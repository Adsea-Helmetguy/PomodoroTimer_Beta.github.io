// export interface buttonProps{
//     colour?:string;
//     size?:string;
//     hover?:boolean;
//     textColour?:string;
//     shadow?:string;
//     border?:string;
// }
export interface classAppend {
    containerClass?:string | null;
    buttonClass?:string | null;
}
export interface buttonContainerId { 
    containerId?:string;
    buttonId?:string | null;
}
export interface buttonContainerProps {
    classes:classAppend;
    id:buttonContainerId;
    //customised:buttonProps;
}

export function buttonContainer(props:buttonContainerProps): HTMLElement {
    const   ids = props.id;
    const   classes = props.classes;
    const   container = document.createElement("div");
    const   button = document.createElement("button");

    container.id = `${ids.containerId}`;
    button.id = `${ids.buttonId}`;
    container.className = `${classes.containerClass}`;
    button.className = `ease-out transform transition hover:scale-125 inline 
						delay 75 duration-200 bg-teal-400 px-6 py-2 m-0
						border-2 border-blue-500 hover:border-gray-500 focus:ring-4 focus:ring-blue-300
						hover:hover:text-black hover:opacity-50 hover:shadow-md ${classes.buttonClass}`;
    container.appendChild(button);
    return (container);
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