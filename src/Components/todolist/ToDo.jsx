import React from "react";
import "../../App.css"

function ToDo({todo, onDeleteClicked}){
    const handleDelete = (e) => {
        e.preventDefault();
        onDeleteClicked(todo);
      }
    
    return(
        <p className="todo_task">
            {todo.task}
            <button className="todo_delete_button" onClick={handleDelete}></button>
        </p>
    );
};

export default ToDo;