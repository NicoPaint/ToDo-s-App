//Este componente va a ser el modal que inserte otros elementos en un nodo HTML diferente al de app.
//React
import React from "react";
import ReactDom from "react-dom";
//Styles
import "./Modal.css"

//Esta funcion se usa para crear el modal. Esta retorna el método ReactDom.createPortal que recibe 2 argumentos: 1- el componente que se va a enviar; 2- el nodo de HTML que lo va a recibir.
function Modal({ children }){
    return(
        ReactDom.createPortal(
            <div className="todo-modal" >
                { children }
            </div>,
            document.getElementById('modal') //Este es un div con id="modal" que se encuentra en el archivo index.html de la carpeta public.
        )
    )
}

export { Modal };