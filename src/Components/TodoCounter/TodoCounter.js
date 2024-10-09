//este componente es el titulo de la app que muestra al usuario cuantos ToDos a completado del total
//React
import React from 'react';
//Context
import { TodoContext } from '../TodoContext/TodoContext';
//Styles
import './TodoCounter.css'

function TodoCounter(){
    //Se trae del contexto de Todos los estados derivados completedToDos y totalToDos.
    const {
      completedToDos,
      totalToDos,
    }= React.useContext(TodoContext)

    return(
      <h1 className='todo-counter'>
        Has completado <span>{completedToDos}</span> de <span>{totalToDos}</span> ToDo's
      </h1>
    );
}

export { TodoCounter };