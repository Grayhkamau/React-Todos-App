import React, {useReducer,useEffect} from 'react';
import {jsPDF} from 'jspdf';
import {v4 as uuidv4} from 'uuid';

let TodoContext = React.createContext();
let TodoProvider = TodoContext.Provider;

function ContextClass(props){
let initialState = {todos:[]};

useEffect(()=>{
    dispatch({type:'gettingTodos', payload:gettingTodos()});
},[])

function gettingTodos(){
    let temp = localStorage.getItem('todos');
    let state = JSON.parse(temp);
    if(!state) return;
    return state;
}


function reducer(state,action){
    let {todos} = state;
    let updatedTodos = {};
    switch (action.type) {
    case 'gettingTodos':
        return {todos:action.payload};
    case 'checked':
       updatedTodos = todos.map(todo=>{
                        if(todo.id===action.payload){
                            return{
                                ...todo,
                                completed:!todo.completed
                            }
                        }
                        return todo
                    })
        return {todos:updatedTodos};
    case 'deleteTodo':
            updatedTodos = todos.filter(todo=>{
                        return todo.id!==action.payload
                        })
        return {todos:updatedTodos};
    case 'updateTitle':
            updatedTodos = todos.map(todo=>{
                        if(todo.id===action.payload.id){
                        return{
                            ...todo,
                            title:action.payload.title
                        }
                        }
                    return todo
                    })
            return {todos:updatedTodos};
    case 'addTodo':
            updatedTodos = {todos:[...todos, {
                    'id':uuidv4(),
                    'title':action.payload,
                    'completed':false
                    }]}
            return updatedTodos
    default:
        return state;
}
}

let [newState,dispatch] = useReducer(reducer,initialState)

useEffect(()=>{
    let temp = JSON.stringify(newState.todos);
    localStorage.setItem('todos',temp);
},[newState])

function addTodo(payload, stateUpdater){
    if(payload.trim()){
        dispatch({type:'addTodo', payload})
    }
    else{
        alert('please input a todo');
    }
    stateUpdater({
        title:''
    })
}

function downloadDoc(){
    if(newState.todos.length===0) return;
    let doc = new jsPDF();
    let y = 25;
    doc.text('todo',65,10);
    doc.text('status',130,10);
    for (let index = 0; index < newState.todos.length; index++) {
        doc.text(newState.todos[index].title, 65,y);
        doc.text(newState.todos[index].completed?'completed':'in progress', 130,y);
        y += 10;
    }
doc.save('todos.pdf');
}
let buttonName = newState.todos.length===1?'Todo':'Todos';
return(
    <TodoProvider value={{
        ...newState,
        dispatch:dispatch,
        downloadDoc:downloadDoc,
        buttonName:buttonName,
        addTodo:addTodo
    }}>{props.children}</TodoProvider>
    )
}
export {TodoContext,ContextClass}