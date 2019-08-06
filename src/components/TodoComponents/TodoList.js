// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = props => {
    console.log("todo props", props.todoItems)
    return (
        <div>
            hello
            {props.todoItems.map(item => {
                return <Todo   key={item.id} item={item} toggleItem={props.toggleItem}/>
            })
            }
        </div>

    )
}

export default TodoList;