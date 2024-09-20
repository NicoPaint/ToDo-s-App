//Este componente es la barra de búsqueda de la app para filtrar los ToDo items de la lista total
import React from 'react';
import './TodoSearch.css'

function TodoSearch({
    searchValue,
    setSearchValue
}){

    return(
        <input 
            placeholder="Terminar la ToDo app" 
            className='todo-search'
            value={searchValue}  /* se asigna a la propiedad value del input lo que este guardado en el estado searchValue. Inicialmente es un string vacío */
            onChange={(event) => {
                setSearchValue(event.target.value);  /* Se agrega un event listener para que monitoree cada vez que haya un cambio en el input del usuario y a su vez asigne ese cambio al estado searchValue. Si esto no se aplica, gracias a la asignación value={searchValue}, no se mostraría nada en la barra de búsqueda porque el estado no cambia */
            }}
        /> 
    );
}

export { TodoSearch };