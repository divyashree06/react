import React from 'react';

const Modal = (prop) => {
    return(
        <div className="modal-container">
            <div className="modal">
                {prop.children}
                <button 
                onClick={prop.onClose}
                className="btn btn-danger">Close</button>
            </div>
        </div>
    )
}

export default Modal;