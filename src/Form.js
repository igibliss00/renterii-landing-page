import React, { useState } from 'react'

import axios from 'axios'
import './style/Form.css'

const ROOT_URL = 'https://us-central1-renterii-landing-page.cloudfunctions.net'

const Form = ({ closeModal }) => {
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const handleSubmit = async e => {
        e.preventDefault()                
        try {
            await axios.post(`${ROOT_URL}/createEmailList`, {
                email,
                firstName,
                lastName
            })
        } catch (err) {
            console.log(err)
        }
        closeModal()
    }
    
    return (
        <form 
            className="form"
            onSubmit={handleSubmit}
        >
            <div className="title">Bringing the world new accessible items + experiences - Notify me when renterii launches!</div>
            <div className="label">Name *</div>
            <div className="desc">What is your name?</div> 
            <div className="input-container">
                <label className="label">
                    <input 
                        className="input" 
                        type="text" 
                        value={firstName} 
                        onChange={e => setFirstName(e.target.value)} 
                    />
                    <div className="desc">First Name</div>
                </label>
                <label className="label">
                    <input 
                        className="input"
                        type="text" 
                        value={lastName} 
                        onChange={e => setLastName(e.target.value)} 
                    />
                    <div className="desc">Last Name</div>
                </label>
            </div>
            <div className="label">Email Address *</div>
            <div className="desc">Receive exclusive launch updates + event invites.</div> 
            <div className="input-container">
                <label className="label">
                    <input 
                        className="input2" 
                        type="email" 
                        value={email} 
                        onChange={e => setEmail(e.target.value)} 
                    />
                </label>
            </div>
            <button className="button">Submit</button>
        </form>
    )
}

export default Form