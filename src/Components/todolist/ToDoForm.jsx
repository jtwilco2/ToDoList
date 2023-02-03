import React, { useState } from 'react';
import "../../App.css"

const ToDoForm = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input className='todo_input' value={userInput} type="text" onChange={handleChange} placeholder="Enter Item"/>
            <button className='todo_submit_button'>Submit</button>
        </form>
    );
};

export default ToDoForm;