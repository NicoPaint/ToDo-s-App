//Este componente maneja solo la parte visual del componenete App.
//React
import React from 'react';
//Components
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoList } from '../TodoList/TodoList';
import { TodoSearch } from '../TodoSearch/TodoSearch';
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
    deleteToDo,
    loading,
    error
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
                {loading && <p>Estamos Cargando...</p>}  {/* La app muestra ese mensaje si todavia no ha obtenido al info de LS */}
                {error && <p>Hubo un error!!!</p>}  {/* La app muestra ese mensaje si hubo un error trayendo la info de LS */}
                {!loading && totalToDos === 0 && <p>¡Crea tu primer ToDo Item!</p>}  {/* La app muestra este mensaje si terminó la carga de LS y no hay nada guardado en LS */}
                {searchedToDos.map(todo => (  /* se reemplaza toDos por searchedToDos porque es derivado del primero y contiene el listado filtrado */ /* No hay que hacer ninguna validación para esta seccion despues de la carga porque si no hay nada en LS, searchedToDos es un array vacio y simplemente itera sobre ese array vacio. */
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
