import React, {Component} from 'react'
import { TodoContext } from '../todoContext'
import {AiOutlineDelete} from 'react-icons/ai';
class Todoitem extends Component{
    static contextType = TodoContext
    state={
        showInput:false,
        title:''
    }

    showInput = ()=>{
        this.setState(prevState=>{
            return prevState.showInput=!prevState.showInput
        })}

    updateTodo = (e)=>{
        e.preventDefault();
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render(){
        let data = this.context;
        
        let checkKey = (e,id)=>{
            if(e.key==='Enter'){
                data.dispatch({type:'updateTitle',payload:{id,title:this.state.title}});
                this.setState({
                    title:'',
                    showInput:false
                })
            }
        }
        let checked = {
            textDecoration:'line-through',
            opacity:0.4,
            fontStyle:'italic'
        }
        return(
            <li className='todo'>
                <div onDoubleClick={this.showInput}>
                <input type='checkbox' className='checkbox' checked={this.props.todo.completed} onChange={()=>data.dispatch({type:'checked',payload:this.props.todo.id})} />
                <span style={this.props.todo.completed?checked:null}>{this.props.todo.title}</span>
                </div>
                <input type='text' style={this.state.showInput ? {display:'block'}:{display:'none'}} 
                value={this.state.title} onChange={(e)=>this.updateTodo(e)} onKeyDown={e=>checkKey(e,this.props.todo.id)} name='title'/>
                
                <button onClick={()=>data.dispatch({type:'deleteTodo',payload:this.props.todo.id})}><AiOutlineDelete style={{color:'red', fontSize:'18px'}}/></button>
            </li>
        )
    }
}

export default Todoitem