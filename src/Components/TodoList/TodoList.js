//Este componente es el contenedor de cada uno de los ToDos de la app
import "./TodoList.css"

function TodoList(props){
    return(
        <ul className="todo-list">
            {props.children}
        </ul>
    );
}

export { TodoList };