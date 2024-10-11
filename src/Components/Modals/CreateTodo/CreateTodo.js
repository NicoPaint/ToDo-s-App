//Este componente va a ser el formulario para crear ToDos que aparace en el modal cada vez que se presiona el botón CreateTodoButton
//React
import React from "react";
//context
import { TodoContext } from "../../TodoContext/TodoContext";
//components
import { DeleteIcon } from "../../Icons/DeleteIcon";
//styles
import "./CreateTodo.css"


function CreateTodo(){

    const { setOpenModal } = React.useContext(TodoContext)

    return(
        <form 
            className="CreateTodo-Form" 
            onSubmit={(event) => {
                event.preventDefault();
            }}
        >
            <DeleteIcon onDelete={() => setOpenModal(false)}/>
            <label>Escribe tu nuevo ToDo</label>
            <textarea
                placeholder="Escribelo aqui..."
            />
            <button type="submit" className="CreateTodo-Form-button CreateTodo-Form-button--add">
                Agregar
            </button>
        </form>
    )
}

export { CreateTodo };