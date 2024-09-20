//Este componente representa un solo item en la lista de ToDos.
import "./TodoItem.css"

function TodoItem(props){
    return(
      <li className="todo-item">
        <span 
          className={`icon icon-check ${props.completed && "icon-check--active"}`}  /* si el ToDo ha sido completado aplica la clase icon-check--active al span para aplicar los estilos */
          onClick={props.onComplete}  /* cada vez que el usuario haga click sobre el icon check se va a ejecutar la funcion en onComplete */
        >
          V
        </span> 
        <p className={`todoItem-text ${props.completed && "todoItem-text--completed"}`}>{props.text}</p> {/* toma como text content lo que venga escrito en la prop text cada toDO */}
        <span 
          className="icon icon-delete"
          onClick={props.onDelete}  /* cada vez que el usuario haga click sobre el icon delete se va a ejecutar la funcion en onDelete */
        >
          X
        </span>
      </li>
    );
}

export { TodoItem };