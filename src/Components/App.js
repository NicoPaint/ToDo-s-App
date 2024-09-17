import React from 'react';
import { TodoCounter } from './TodoCounter/TodoCounter';
import { TodoSearch } from './TodoSearch/TodoSearch';
import { TodoList } from './TodoList/TodoList';
import { TodoItem } from './TodoItem/TodoItem';
import { CreateTodoButton } from './CreateTodoButton/CreateTodoButton';
import './App.css';

const defaultTodos = [
  { text: "Ver bettlejuice 2", completed: true},
  { text: "Pagar arriendo", completed: false},
  { text: "Comprar la moto", completed: false},
  { text: "Invertir $400 dolares", completed: true},
  { text: "Sacar la basura", completed: false},
  { text: "Terminar la tarea", completed: false},
  { text: "Agregar estilos CSS", completed: true},
  { text: "Buscar los iconos", completed: false},
  { text: "Descargar la imagen de fondo", completed: true},
  { text: "Subir los cambios a GitHub", completed: true},
]

function App() {
  return (
    <div className='app'>

      <TodoCounter total={6} completed={1}/>
      <TodoSearch/>

      <TodoList>
        {defaultTodos.map(todo => (
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
