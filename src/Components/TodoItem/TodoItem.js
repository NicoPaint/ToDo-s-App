//Este componente representa un solo item en la lista de ToDos.
//React
import React from "react";
//Components
import { CompleteIcon } from "../Icons/CompleteIcon";
import { DeleteIcon } from "../Icons/DeleteIcon";
//Styles
import "./TodoItem.css"

function TodoItem(props){
    return(
      <li className="todo-item">
        <CompleteIcon
          completed={props.completed}  //Se pasa este prop para aplicar efectos al icono segun este estado.
          onComplete={props.onComplete}  //La función que viene en onComplete se asigna al prop onComplete para utilizarla en el span de ToDoIcon. Se va a ser el traspaso hasta ese componente.
        />
        
        <p className={`todoItem-text ${props.completed && "todoItem-text--completed"}`}>{props.text}</p> {/* toma como text content lo que venga escrito en la prop text cada toDO */}

        <DeleteIcon
          onDelete={props.onDelete}  //La función que viene en onDelete se asigna al prop onDelete para utilizarla en el span de ToDoIcon. Se va a ser el traspaso hasta ese componente.
        />
      </li>
    );
}

export { TodoItem };