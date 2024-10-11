//Este componente maneja solo la parte visual del componenete App.
//React
import React from 'react';
//Context
import { TodoContext } from '../TodoContext/TodoContext';
//Components
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoList } from '../TodoList/TodoList';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoCounterLoading } from '../LoadingSkeletons/TodoCounterLoading/TodoCounterLoading';
import { TodoSearchLoading } from '../LoadingSkeletons/TodoSearchLoading/TodoSearchLoading';
import { TodosLoading } from '../LoadingSkeletons/TodosLoading/TodosLoading';
import { TodoError } from '../TodoError/TodoError';
import { EmptyTodos } from '../EmptyTodos/EmptyTodos';
//Modal
import { Modal } from '../Modals/Modal';
import { CreateTodo } from "../Modals/CreateTodo/CreateTodo"
//Styles
import './App.css';

function AppUI(){
    //Se trae del contexto de ToDos todos los elementos que se necesitan en este componente.
    const {
        completedToDos,
        totalToDos,
        shootingConfetti,
        loading,
        error,
        searchedToDos,
        toggleToDo,
        deleteToDo,
        openModal,
    } = React.useContext(TodoContext);

    return(
        <div className='app'>
            {completedToDos === totalToDos && totalToDos !== 0 && shootingConfetti()}  {/* Cuando los completede sean igual a los totales, y existan ToDos, va a disparar el confetti en la app */}
            {/* Se evalua si la app esta cargando para renderizar el loading skeleton */}
            {loading ? 
                <TodoCounterLoading/> 
                : 
                <TodoCounter/>
            }

            {/* Se evalua si la app esta cargando para renderizar el loading skeleton */}
            {loading ? 
                <TodoSearchLoading/>
                :
                <TodoSearch/>
            }

            <TodoList>
                {loading && (
                    <>
                        <TodosLoading />
                        <TodosLoading />
                        <TodosLoading />
                        <TodosLoading />
                        <TodosLoading />
                        <TodosLoading />
                        <TodosLoading />
                        <TodosLoading />
                    </>
                )}  {/* La app muestra los loading skeletons de los todo items si todavia no ha obtenido al info de LS */}
                {error && <TodoError />}  {/* La app muestra ese mensaje si hubo un error trayendo la info de LS */}
                {!loading && totalToDos === 0 && <EmptyTodos />}  {/* La app muestra este mensaje si terminó la carga de LS y no hay nada guardado en LS */}
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
            
            {/* Esta es la sección del modal para crear ToDos. Si openModal es true se va a mostrar la ventana emergente, si es false no se muestra */}
            {openModal && (
                <Modal>
                    <CreateTodo />
                </Modal>
            )}
        </div>
    )
}

export { AppUI };
