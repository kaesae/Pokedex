import React, { useState } from 'react'

export default function Header(props) {
    const [name, setName] = useState("");

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(name)
    }

  return (
    <header>
        <form onSubmit={handleSubmit} className="inputForm">
            <div className="inputContainer">
                <label>I'm looking to catch...</label>
                <input type="text" value={name} onChange={handleChange} required />
            </div>
            <div className='submitContainer'>
                <button type="submit">Submit</button>
            </div>
        </form>
    </header>
  )
}
