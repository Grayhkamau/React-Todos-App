import React, {useContext} from "react";
import { TodoContext } from "../todoContext";
import Todoitem from "./todoitem";

function Todolist(){
    let data = useContext(TodoContext)

        return(
           <ul>
               {data.todos.map(todo=>{
                   return <Todoitem key={todo.id} todo={todo} completed={todo.completed}/>
               })}
           </ul>
        )
}

export default Todolist;