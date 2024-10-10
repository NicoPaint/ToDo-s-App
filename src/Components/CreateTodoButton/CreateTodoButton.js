//este componente es el botón para crear nuevos ToDos item en la lista general
//React
import React from 'react';
//Context
import { TodoContext } from '../TodoContext/TodoContext';
//Components
import { AddIcon } from '../Icons/AddIcon';
//styles
import './CreateTodoButton.css'

function CreateTodoButton(){

    //Se traen el estado openModal y su actualizador para crear la funcionalidad de abrir o cerrar el modal para crear ToDos.
    const{
        openModal, 
        setOpenModal
    } = React.useContext(TodoContext)

    return(
        <button 
            type="button" 
            className='create-todo-button' 
            onClick={() => {
                openModal ? setOpenModal(false) : setOpenModal(true)  //esta línea evaluar el estado de openModal y lo cambia con cada click a su estado opuesto.
            }}
        >

            <AddIcon/>
        
        </button>
    );
}

export { CreateTodoButton };