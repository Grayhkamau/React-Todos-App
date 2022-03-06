import React,{useContext,useState}from 'react'
import {TodoContext} from '../todoContext';
import {FaPlusCircle} from 'react-icons/fa'
function Inputtodo(){
    let data = useContext(TodoContext)
    
    let [state,stateUpdater]= useState({
        title:''
    })


    function updateState(e){
        e.preventDefault();
        stateUpdater({
            [e.target.name]:e.target.value
        })
    }
        return(
                <div className='form-container'>
                    <input type='text' value={state.title} onChange={e=>updateState(e)} name='title' placeholder='add todo' className='input-text'/>
                    <button onClick={()=>data.addTodo(state.title,stateUpdater)}  className='input-submit'><FaPlusCircle style={{color:'green', fontSize:'18px'}}/></button>
                </div>
        )

}

export default Inputtodo    