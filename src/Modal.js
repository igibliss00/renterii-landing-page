import React from 'react'
import Modal from 'react-modal';

import Form from './Form'
import './style/Modal.css'

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        backgroundColor       : 'rgba(201,160,153, 0)', 
        maxWidth              : '40%',  
        border                : 0,
    }
}

const FormModal = ({ isOpen, setModal }) => {
    const closeModal = () => {
        setModal(false)
    }
    return (
        <div className="container">
            <Modal
                isOpen={isOpen}
                contentLabel="FormModal"
                // className="modal"
                style={customStyles}                
                ariaHideApp={false}
                overlayClassName="overlay"                
            >
                <div onClick={closeModal}>
                    <i className="fas fa-times" id="close-icon"></i>            
                </div>
                <div className="desc">Bringing the world new accessible items, and experiences - rent anything, anywhere!</div>
                <Form />
            </Modal>
        </div>
    )
}

export default FormModal