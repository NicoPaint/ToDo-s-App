//Este custom hooks se utiliza para manejar la persistencia de datos en LS y el estado relacionado a la información traida de LS
import React from "react";

function useLocalStorage(itemName, initialValue) {
    const localStorageItems = localStorage.getItem(itemName);  //Se trate la informción que este en LS bajo itemName en formato string
  
    let parsedItems;  //esta variable guarda la información en LS bajo itemName transformada en array u objeto nuevamente
  
    //Se hace la validación para saber si existe algo en itemName en LS o no
    if(!localStorageItems){
      //si no hay, se crea el espacio de itemName en LS con el initial value y parsedItems se le asigna initial value
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItems = initialValue;
    } else{
      //si si hay, se parsea el string traido de LS y se le asigna a parsedItems.
      parsedItems = JSON.parse(localStorageItems);
    }
  
    const [items, setItems] = React.useState(parsedItems);  //Se crea el estado items para manejar la información de LS en la app de React, y se le asigna como valor inicial lo que haya en LS.
  
    //Esta funcion va hacer la actualización de los items tanto en el LS (persistencia de datos) como en el estado items.
    const saveItemsLS = (newItems) => {
      localStorage.setItem(itemName, JSON.stringify(newItems));
  
      setItems(newItems);
    }
  
    return [items, saveItemsLS];  //Se retorna items y la función para actualizar tanto el estado como el LS.
  }

  export { useLocalStorage };