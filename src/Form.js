import React, { useState } from 'react'

import './style/Form.css'

const Form = () => {
    const [value, setValue] = useState('')
    const handleSubmit = () => {

    }
    
    return (
        <form 
            className="form"
            onSubmit={handleSubmit}
        >
            <div className="title">Bringing the world new accessible items, and experiences - rent anything, anywhere!</div>
            <div className="label">Name *</div>
            <div className="desc">What is your name?</div> 
            <div className="input-container">
                <label className="label">
                    <input 
                        className="input" 
                        type="text" 
                        value={value} 
                        onChange={setValue} 
                    />
                    <div className="desc">First Name</div>
                </label>
                <label className="label">
                    <input 
                        className="input"
                        type="text" 
                        value={value} 
                        onChange={setValue} 
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
                        type="text" 
                        value={value} 
                        onChange={setValue} 
                    />
                </label>
            </div>
            <button className="button">Submit</button>
        </form>
    )
}

export default Form