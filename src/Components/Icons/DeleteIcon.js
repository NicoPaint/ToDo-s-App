//Este componente representa al icon de eliminada (una equis)
//React
import React from "react";
//components
import { ToDoIcon } from "./ToDoIcon";

function DeleteIcon({ onDelete }){
    return (
        <ToDoIcon
            type="delete"  //este prop le indica a ToDoIcon que icon svg asignarle al span que devuelve en su archivo.
            color="gray"  //se le asigna el gris como color base al icon.
            onClick={onDelete}  //La función que viene en onDelete se asigna al prop onClick para utilizarla en el span de ToDoIcon
        />
    );
}

export { DeleteIcon };