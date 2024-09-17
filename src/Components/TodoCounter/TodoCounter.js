import './TodoCounter.css'

function TodoCounter({ total, completed}){
    return(
      <h1 className='todo-counter'>
        Has completado <span>{completed}</span> de <span>{total}</span> ToDo's
      </h1>
    );
}

export { TodoCounter };