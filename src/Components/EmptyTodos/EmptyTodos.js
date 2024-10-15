//Este componente muestra el mensaje cuando la lista de ToDos esta vacía.
//React
import React from "react";
//Components
import { ArrowIcon } from "../Icons/ArrowIcon";
//Styles
import "./EmptyTodos.css"

function EmptyTodos(){
    return(
        <>
            <p className="empty-todos-text">¡Crea tu primer ToDo Item!</p>
            <ArrowIcon/>
        </>
    )
}

export { EmptyTodos };