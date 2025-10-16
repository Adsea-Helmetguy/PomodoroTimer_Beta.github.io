export interface classAppend {
    container:string | null;
    image:string | null;
    button:string | null;
}
export interface buttonContainerId { 
    container:string;
    image:string | null;
    button:string | null;
}
export interface buttonContainerProps {
    classAppend:classAppend;
    id:buttonContainerId;
    imgSrc:string | null;
}

export default function buttonContainer(props:buttonContainerProps): HTMLElement {
    const   ids = props.id;
    const   classes = props.classAppend;
    const   imgPath = props.imgSrc;
    const   container = document.createElement("div");
    const   button = document.createElement("button");
    const   image = document.createElement("img");
    container.id = `${ids.container}`;
    image.id = `${ids.image}`;
    button.id = `${ids.button}`;
    container.className = `${classes.container}`;
    button.className = `ease-out transform transition hover:scale-125 inline 
						delay 75 duration-200 bg-teal-400 px-6 py-2 m-6
						border-2 border-blue-500 hover:border-gray-500 
						hover:hover:text-black hover:opacity-50 hover:shadow-md ${classes.button}`;
    image.className =  `${classes.image}`;
    image.src = `${imgPath}`;
    
    //container.appendChild()
    return (button);
}