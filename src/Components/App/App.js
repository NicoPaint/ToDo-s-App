//Este es el componente que va a contener toda la aplicación de ToDos y tiene la lógica a ejecutar. La parte visual se manehja en AppUI,js
//React
import React from 'react';
//Components
import { AppUI } from './AppUI';
//Context
import { TodoProvider } from '../TodoContext/TodoContext';

function App() {
  return (
    //Se retorna esta configuracion para aplicarle el context de ToDos a la aplicación. Se corto toda la lógica que habia en este componente y se pasó al contexto de ToDos
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
