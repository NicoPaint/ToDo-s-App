//Este componente maneja solo la parte visual del componenete App.
//React
import React from 'react';
//Components
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
//Styles
import './App.css';

function AppUI({
    completedToDos,
    totalToDos,
    shootingConfetti,
    searchValue,
    setSearchValue,
    searchedToDos,
    toggleToDo,
    deleteToDo
}){
    return(
        <div className='app'>
            {completedToDos === totalToDos && totalToDos !== 0 && shootingConfetti()}  {/* Cuando los completede sean igual a los totales, y existan ToDos, va a disparar el confetti en la app */}
            <TodoCounter 
                total={totalToDos}   /* se pasa como props la cantidad de ToDOs terminados y la cantidad total para mostrarlos en el titulo de la app */
                completed={completedToDos}
            />
            <TodoSearch
                /* Se pasa el estado searchValue y su modificador a la barra de busqueda para capturar lo que escriben los usuarios */
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />

            <TodoList>
                {searchedToDos.map(todo => (  /* se reemplaza toDos por searchedToDos porque es derivado del primero y contiene el listado filtrado */
                <TodoItem 
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => toggleToDo(todo.text)}  /* Se pasa la funcion toggleToDo a los props del TodoItem. se encapsula en un arrow function porque toggleToDo recibe un parametro */
                    onDelete={() => deleteToDo(todo.text)} /* Se pasa la funcion deleteToDo a los props del TodoItem. se encapsula en un arrow function porque deleteToDo recibe un parametro */
                />
                ))}
            </TodoList>

            <CreateTodoButton/>
        </div>
    )
}

export { AppUI };