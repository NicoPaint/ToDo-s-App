//este componente es el titulo de la app que muestra al usuario cuantos ToDos a completado del total
import './TodoCounter.css'

function TodoCounter({ total, completed}){
    return(
      <h1 className='todo-counter'>
        Has completado <span>{completed}</span> de <span>{total}</span> ToDo's
      </h1>
    );
}

export { TodoCounter };