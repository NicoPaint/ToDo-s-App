//Este componente representa al icon de agregar del boton de agregar nuevo ToDo
//React
import React from "react";
//components
import { ToDoIcon } from "./ToDoIcon";

function ArrowIcon(){
    return(
        <ToDoIcon
            type= "arrow"  //este prop le indica a ToDoIcon que icon svg asignarle al span que devuelve en su archivo.
            color= "var(--dark-blue)"  //se le asigna el dark blue como color base al icon.
        />
    )
}

export { ArrowIcon };