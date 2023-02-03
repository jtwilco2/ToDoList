import React, { useState, useCallback } from "react";
import List from "./Components/todolist/List";
import ToDoForm from "./Components/todolist/ToDoForm";

import "./App.css";

function App() {
  const [list, setList] = useState([]);

  const addTask = (userInput) => {
    let copy = [...list];
    copy = [...list, { id: list.length + 1, task: userInput }];
    setList(copy);
  };

  const onDelete = useCallback(
    (todo) => {
      const newList = [...list];
      const indexOf = newList.findIndex(object => {
        return object.id === todo.id;
      });
      newList.splice(indexOf, 1);
      setList(newList);
    },
    [list]
  );

  return (
    <div className="body">
      <div className="App">
        <div className="todo_entire">
        <h3 className="todo_length">
          You have {list.length} Todos
        </h3>
        <List list={list} onDeleteApp={onDelete} />
        <ToDoForm addTask={addTask} />
        </div>
      </div>
    </div>
  );
}

export default App;
