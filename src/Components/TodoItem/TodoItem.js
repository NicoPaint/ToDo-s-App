//Este componente representa un solo item en la lista de ToDos.
import "./TodoItem.css"

function TodoItem(props){
    return(
      <li className="todo-item">
        <span className={`icon icon-check ${props.completed && "icon-check--active"}`}>V</span>  {/* si el ToDo ha sido completado aplica la clase icon-check--active al span para aplicar los estilos */}
        <p className={`todoItem-text ${props.completed && "todoItem-text--completed"}`}>{props.text}</p> {/* toma como text content lo que venga escrito en la prop text cada toDO */}
        <span className="icon icon-delete">X</span>
      </li>
    );
}

export { TodoItem };