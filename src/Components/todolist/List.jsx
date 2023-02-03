import React, {useCallback} from "react";
import ToDo from "./ToDo";

function List({list, onDeleteApp}) {
    
    const onDelete = useCallback((todo)=>{
    onDeleteApp(todo);
    },[onDeleteApp]);

  return (
      <p>
        {list.map(todo => {
            return (
                <ToDo todo={todo}
                onDeleteClicked={onDelete}/>
            )
        })}
      </p>
  );
};

export default List;
