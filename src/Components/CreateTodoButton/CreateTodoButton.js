//este componente es el botón para crear nuevos ToDos item en la lista general
//Components
import { AddIcon } from '../Icons/AddIcon';
//styles
import './CreateTodoButton.css'

function CreateTodoButton(){
    return(
        <button 
            type="button" 
            className='create-todo-button' 
            onClick={(event) => {
                console.log('diste click al botón');
                console.log(event);
                console.log(event.target);
            }}
        >

            <AddIcon/>
        
        </button>
    );
}

export { CreateTodoButton };