import React from 'react';
import { TodoCounter } from './TodoCounter/TodoCounter';
import { TodoSearch } from './TodoSearch/TodoSearch';
import { TodoList } from './TodoList/TodoList';
import { TodoItem } from './TodoItem/TodoItem';
import { CreateTodoButton } from './CreateTodoButton/CreateTodoButton';

const defaultTodos = [
  { text: "Ver bettlejuice 2", completed: true},
  { text: "Pagar arriendo", completed: false},
  { text: "Comprar la moto", completed: false},
  { text: "Invertir $400 dolares", completed: true},
  { text: "Sacar la basura", completed: false},
]

function App() {
  return (
    <>

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
      
    </>
  );
}

export default App;
