//Este componente va a manejar el mensaje de error de carga de la base de datos.
//React
import React from "react";
//Styles
import "./TodoError.css"

function TodoError(){
    return(
        <p className="error-todos-text">Lo sentimos, hubo un error. Vuelve a cargar la app</p>
    )
}

export { TodoError };