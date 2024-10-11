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

    //Se trae del contexto de ToDos todos los elementos que se necesitan en este componente.
    const { 
        setOpenModal,
        addTodo,
    } = React.useContext(TodoContext);

    const [ newTodoValue, setNewTodoValue ] = React.useState('');  //Se crea un estado local para manejar lo que escribe los usuarios en el text area.

    //Esta funcion vincula lo que escriben los usuarios en el text area con el estado newTodoValue.
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }
    
    //Esta funcion se ejecuta cuando se hace click en el boton de Submit en el formulario del modal.
    const onSubmit = (event) => {
        event.preventDefault();  //Esta linea previene que se recargue la página
        addTodo(newTodoValue) //Esta linea agrega lo que escriben los usuarios como un nuevo todo de la lista general
        setOpenModal(false);  //Esta linea cierra el modal para continuar trabajando.
    }

    return(
        <form 
            className="CreateTodo-Form" 
            onSubmit={onSubmit}
        >
            <DeleteIcon onDelete={() => setOpenModal(false)}/>  {/* se envia a onDelete una funcion para que cierre el modal cuando se haga click sobre el icono */}
            <label>Escribe tu nuevo ToDo</label>
            <textarea
                placeholder="Escribelo aqui..."
                value={newTodoValue}
                onChange={onChange}
            />
            <button type="submit" className="CreateTodo-Form-button">  {/* Es importante especificar el tipo como submit para ejecutar el evento onSubmit del form cada vez que se haga click al botón */}
                Agregar
            </button>
        </form>
    )
}

export { CreateTodo };