//Este componente representa al icono base. De el se van a crear todos los iconos de la app según la librería de iconos que contenga.
//React
import React from "react";
//Components
import {ReactComponent as CheckSVG} from "./SVG/task-done-svgrepo-com.svg"
import {ReactComponent as DeleteSVG} from "./SVG/close-bold-svgrepo-com.svg"
import {ReactComponent as AddSVG} from "./SVG/plus-svgrepo-com.svg"
import {ReactComponent as ArroSVG} from "./SVG/arrow-down-svgrepo-com.svg"
//styles
import "./ToDoIcon.css"

//Este es un objeto que va a contener a todos los iconos de la App en formato de SVG (librería de iconos) para ser insertados mas adelante en el componente ToDoIcon.
const iconTypes = {
    //cada conjunto clave-valor es una función que devuelve el icono en SVG que se necesita, y se utiliza funciones para poder aplicar clases dinamicamente
    "check": (color) => <CheckSVG className="icon-svg" fill={color}/>,
    "delete": (color) => <DeleteSVG className="icon-svg" fill={color}/>,
    "add": (color) => <AddSVG className="icon-svg" fill={color}/>,
    "arrow": (color) => <ArroSVG className="icon-svg" fill={color}/>
}

function ToDoIcon({ type, color, onClick }){
    return (
        <span
            className={`icon-container icon-container-${type}`}  //Con clases dinamicas se le asigna clase correspondiente según el tipo
            onClick={onClick}  //Se crea un event listener para la función que viene asignada a onClick. Esta se ha pasado desde el componente App.
        >
            {iconTypes[type](color)}  {/* esta línea de código es la que invoca la función que asigna el SVG de la librería según la clave que se pase en type pasandole el color como argumento*/}
        </span>
    );
}

export { ToDoIcon };