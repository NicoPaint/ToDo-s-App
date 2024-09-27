//Este componente representa al icon de completado (un check sign)
//React
import React from "react";
//components
import { ToDoIcon } from "./ToDoIcon";

function CompleteIcon({ completed, onComplete }){
    return (
        <ToDoIcon
            type="check"  //este prop le indica a ToDoIcon que icon svg asignarle al span que devuelve en su archivo.
            color={completed ? "green" : "rgba(255, 255, 255, 0.9)"}  // Segun si ya se completó el ToDo o no se le asigna un color al prop color
            onClick={onComplete}  //La función que viene en onComplete se asigna al prop onClick para utilizarla en el span de ToDoIcon
        />
    );
}

export { CompleteIcon };