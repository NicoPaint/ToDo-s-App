//Este componente representa al icon de agregar del boton de agregar nuevo ToDo
//React
import React from "react";
//components
import { ToDoIcon } from "./ToDoIcon";

function AddIcon(){
    return(
        <ToDoIcon
            type= "add"  //este prop le indica a ToDoIcon que icon svg asignarle al span que devuelve en su archivo.
            color= "gray"  //se le asigna el gris como color base al icon. Pero para este caso en particular, cambié el color directamente desde el ToDoIcon.css porque este SVG no usa fill sino stroke para darle color.
        />
    )
}

export { AddIcon };