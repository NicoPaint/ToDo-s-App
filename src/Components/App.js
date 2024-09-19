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
  console.log(searchValue);

  const completedToDos = toDos.filter(todo => todo.completed).length;  //se crea este estado derivado para llevar la cuenta de los ToDOs completados
  const totalToDos = toDos.length;  //este estado derivado lleva la cuenta del total de ToDos creados.

  return (
    <div className='app'>

      <TodoCounter total={totalToDos} completed={completedToDos}/>  {/* se pasa como props la cantidad de ToDOs terminados y la cantidad total para mostrarlos en el titulo de la app */}
      <TodoSearch
        /* Se pasa el estado searchValue y su modificador a la barra de busqueda para capturar lo que escriben los usuarios */
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {toDos.map(todo => (
          <TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton/>
      
    </div>
  );
}

export default App;
