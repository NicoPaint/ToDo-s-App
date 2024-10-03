//Este es el componente que va a contener toda la aplicación de ToDos y tiene la lógica a ejecutar. La parte visual se manehja en AppUI,js
//React
import React from 'react';
//Components
import { AppUI } from './AppUI';
//Hooks
import { useLocalStorage } from '../../Hooks/useLocalStorage';
//Confetti
import Confetti from 'react-confetti';


/* const defaultToDos = [
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

localStorage.setItem("TODOS_V1", JSON.stringify(defaultToDos));
localStorage.removeItem("TODOS_V1"); */

function App() {
  //Solo se pueden pasar estados de padres a hijos, por lo que se van a crear la mayoria de ellos en este componente padre.

  const {
    items: toDos, 
    saveItemsLS: saveToDosLS,
    loading,
    error
  } = useLocalStorage("TODOS_V1", []);  //Se consume este custome hooks para crea la lista de ToDos de la app que toma como valor inicial el array que este guardado bajo TODOS_V1 en local storage. Tambien se trae los indicativos de carga y error para realizar acciones segun sus respuestas.
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

    saveToDosLS(newToDos);  //Se actualiza el estado de toDos y el LS para hacer el render del nuevo listado actualizado
  }
  
  //Este estado derivado se usa para eliminar un item de la lista cada vez que el usuario da click en el icon de eliminar. Para ello se le pasa el texto del item para identificarlo
  const deleteToDo = (text) => {
    const newToDos = [...toDos];  //se crea una copia de el estado toDos.
    const toDoIndex = newToDos.findIndex(todo => todo.text === text)  //Se trae el indice del ToDo a eliminar.

    newToDos.splice(toDoIndex, 1);  //se usa el metodo splice para eliminar el item seleccionado. Se pasa el indice y un solo elemento para eliminar solo ese unico item.

    saveToDosLS(newToDos);  //Se actualiza el estado de toDos y el LS para hacer el render del nuevo listado actualizado
  }

  //Esta funcion contiene la logica para lanzar el confetti cuando se completa todos los items de la lista
  const shootingConfetti = () => {
    alert('Felicitaciones! Has completado los ToDos que tenias para hoy 🥳')  //se lanza un mensaje en el navegador

    //Se inserta el componente Confetti (importado de react-confetti) con esos estilos para ajustarlo a toda la pantalla.
    return (<Confetti style={{
      top: "-40px",
      left: "calc((100vw - 100%)/2*(-1))"
    }}/>)
  }

  return (
    /* Se le pasan todos la información obtenida por el código de App al componente AppUI para que renderice la aplicación */
    <AppUI
      completedToDos={completedToDos}
      totalToDos={totalToDos}
      shootingConfetti={shootingConfetti}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedToDos={searchedToDos}
      toggleToDo={toggleToDo}
      deleteToDo={deleteToDo}
      loading={loading}
      error={error}
    />
  );
}

export default App;
