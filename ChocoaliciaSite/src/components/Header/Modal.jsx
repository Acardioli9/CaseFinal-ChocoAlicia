import React from "react";
import '../Header/style.scss'

// import  '../componentes/popup.jsx'

const Modal = ({ id= 'modal', onClose = () => {},children} ) => {

    const handleOutsideClick = (e) => {
        if (e.target.id === id) onClose();
    }

   
    return ( 
    <div id={id} className ="modal" onClick={handleOutsideClick} >
        <div className="container2">
            <button className="close" onClick={onClose}/>
           
            <div className="content">{children}</div>
        </div>
    </div>
    )
}

export default Modal