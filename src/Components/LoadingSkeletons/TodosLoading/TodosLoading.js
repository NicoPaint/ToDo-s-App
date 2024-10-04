//Este componente va a renderizar los loading skeletons de la app.
//React
import React from "react";
//Styles
import "./TodosLoading.css"

function TodosLoading(){
    return(
        <div className="loading-todo-item">
            <span className="loading-todo-check"></span>
            <p className="loading-todo-text"></p>
            <span className="loading-todo-delete"></span>
        </div>
    )
}

export { TodosLoading };