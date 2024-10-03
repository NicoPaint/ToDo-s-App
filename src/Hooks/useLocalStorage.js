//Este custom hooks se utiliza para manejar la persistencia de datos en LS y el estado relacionado a la información traida de LS
import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [items, setItems] = React.useState(initialValue);  //Se crea el estado items para manejar la información de LS en la app de React, y se le asigna como valor inicial lo que se pase en initialValue.
  const [loading, setLoading] = React.useState(true);  //Se crea el estado de carga de la informacion de LS
  const [error, setError] = React.useState(false);  //Se crea el es estado de error si falla la carga de la informacion en LS

  //Se usa useEffect para encapsular el codigo que hace la llamada a LS para ejecutarlos solo la primera vez que se renderiza el componente App. Esto se logra agregando un array vacio como segundo argumento de useEffect.
  React.useEffect(() => {
    //Se usa setTimeout para simular el tiempo de consumo de consulta a la base de datos. tiempo 2seg.
    setTimeout(() => {
      try{
        const localStorageItems = localStorage.getItem(itemName);  //Se trate la informción que este en LS bajo itemName en formato string
      
        let parsedItems;  //esta variable guarda la información en LS bajo itemName transformada en array u objeto nuevamente
      
        //Se hace la validación para saber si existe algo en itemName en LS o no
        if(!localStorageItems){
          //si no hay, se crea el espacio de itemName en LS con el initial value y parsedItems se le asigna initial value
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItems = initialValue;
        } else{
          //si si hay, se parsea el string traido de LS y se le asigna a parsedItems, y se actualiza el estado de items para asignarle esta informacion.
          parsedItems = JSON.parse(localStorageItems);
          setItems(parsedItems);
        }

        setLoading(false);  //se cambia el estado de loading a false para indicar que el proceso de carga ha terminado.

      } catch(error){
        setLoading(false);  //se cambia el estado de loading a false para indicar que el proceso de carga ha terminado.
        setError(true);  //Si hubo algun error, se cambia el estado de error a true para indicar que no se pudo cargar la info de LS
      }
    }, 2000)
  }, []);


  //Esta funcion va hacer la actualización de los items tanto en el LS (persistencia de datos) como en el estado items.
  const saveItemsLS = (newItems) => {
    localStorage.setItem(itemName, JSON.stringify(newItems));

    setItems(newItems);
  }
  
  return {
    items, 
    saveItemsLS, 
    loading, 
    error
  };  //Se retorna items, la función para actualizar tanto el estado como el LS, el estado de carga y el estado de error.
}

export { useLocalStorage };