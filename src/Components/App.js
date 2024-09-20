//Este es el componente que va a contener toda la aplicación de ToDos
import React from 'react';
import { TodoCounter } from './TodoCounter/TodoCounter';
import { TodoSearch } from './TodoSearch/TodoSearch';
import { TodoList } from './TodoList/TodoList';
import { TodoItem } from './TodoItem/TodoItem';
import { CreateTodoButton } from './CreateTodoButton/CreateTodoButton';
import './App.css';

const defaultToDos = [
  { text: "Ver bettlejuice 2", completed: true},
  { text: "Pagar arriendo", completed: false},
  { text: "Comprar la moto", completed: false},
  { text: "Invertir $400 dolares", completed: true},
  { text: "Sacar la basura", completed: false},
  { text: "Terminar la tarea", completed: true},
  { text: "Agregar estilos CSS", completed: true},
  { text: "Buscar los iconos", completed: false},
  { text: "Descargar la imagen de fondo", completed: true},
  { text: "Subir los cambios a GitHub", completed: true},
]

function App() {
  //Solo se pueden pasar estados de padres a hijos, por lo que se van a crear la mayoria de ellos en este componente padre.

  const [toDos, setToDos] = React.useState(defaultToDos);  //Se crea el estado para la lista de ToDos de la app que toma como valor inicial el array defaultToDos
  const [searchValue, setSearchValue] = React.useState('');  //Se crea el estado searchValue para capturar lo que escriben los usuarios y ejecutar tareas con ello

  const completedToDos = toDos.filter(todo => todo.completed).length;  //se crea este estado derivado para llevar la cuenta de los ToDOs completados
  const totalToDos = toDos.length;  //este estado derivado lleva la cuenta del total de ToDos creados.

  //este estado derivado del toDos va a hacer el filtrado de los ToDos según la búsqueda de los usuarios.
  const searchedToDos = toDos.filter(todo => {
		//toLowerCase se aplica para que el buscador no discrimine entre mayusculas y minusculas
    const toDoText = todo.text.toLowerCase();   
    const searchText = searchValue.toLowerCase();

    return toDoText.includes(searchText); //va a regresar cada uno de los elementos del array que contenga el string que el usuario escriba en la barra. Si es un string vacío va a devolver todo el array original.
  })

  //Este estado derivado se usa para hacer la actualización de la lista cada vez que un usuario de click en el icono de completado, ya sea para marcarlo como completado o no. Para ello se le pasa el texto del item para identificarlo
  const toggleToDo = (text) => {
    const newToDos = [...toDos];  //se crea una copia de el estado toDos.
    const toDoIndex = newToDos.findIndex(todo => todo.text === text)  //Se trae el indice del ToDo a actualizar.

    //Se hace la validación al item de su propiedad completed para cambiarla al otro estado.
    if(newToDos[toDoIndex].completed === false){
      newToDos[toDoIndex].completed = true;
    } else{
      newToDos[toDoIndex].completed = false;
    }

    setToDos(newToDos);  //Se actualiza el estado de toDos para hacer el render del nuevo listado actualizado
  }
  
  //Este estado derivado se usa para eliminar un item de la lista cada vez que el usuario da click en el icon de eliminar. Para ello se le pasa el texto del item para identificarlo
  const deleteToDo = (text) => {
    const newToDos = [...toDos];  //se crea una copia de el estado toDos.
    const toDoIndex = newToDos.findIndex(todo => todo.text === text)  //Se trae el indice del ToDo a eliminar.

    newToDos.splice(toDoIndex, 1);  //se usa el metodo splice para eliminar el item seleccionado. Se pasa el indice y un solo elemento para eliminar solo ese unico item.

    setToDos(newToDos);  //Se actualiza el estado de toDos para hacer el render del nuevo listado actualizado
  }

  return (
    <div className='app'>

      <TodoCounter total={totalToDos} completed={completedToDos}/>  {/* se pasa como props la cantidad de ToDOs terminados y la cantidad total para mostrarlos en el titulo de la app */}
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
  );
}

export default App;
