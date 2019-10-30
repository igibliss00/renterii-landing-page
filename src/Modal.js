import React from 'react'
import Modal from 'react-modal'
import {useSpring, animated} from 'react-spring'

import Form from './Form'
import './style/Modal.css'

const FormModal = ({ isOpen, setModal }) => {    
    const closeModal = () => {
        setModal(false)
    }

    const props = useSpring({
        from: {
          opacity: 0,
          transform: 'scale(0)'
        },
        to: {
          opacity: 1, 
          transform: 'scale(1)'
        },
        config: {
          duration: 2000,      
        }
    })

    return (
        <animated.div style={props}>
            <Modal
                isOpen={isOpen}
                contentLabel="FormModal"
                className="email-modal"               
                ariaHideApp={false}
                overlayClassName="overlay"                
            >
                <div onClick={closeModal}>
                    <i className="fas fa-times" id="close-icon"></i>            
                </div>
                <Form />
            </Modal>
        </animated.div>
    )
}

export default FormModal


// const customStyles = {
//     content : {
//         top                   : '50%',
//         left                  : '50%',
//         right                 : 'auto',
//         bottom                : 'auto',
//         marginRight           : '-50%',
//         transform             : 'translate(-50%, -50%)',
//         backgroundColor       : 'rgba(201,160,153, 0)', 
//         maxWidth              : '50%',  
//         border                : 0,
//     }
// }
