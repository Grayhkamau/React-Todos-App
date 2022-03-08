import React, {Component} from 'react';
import Header from './header';
import Todolist from './todolist'
import Inputtodo from './inputTodo';
import Navbar from './navbar';
import About from './about';
import ErrorPage from './error';
import '../index.css';
import { Switch, Route } from 'react-router-dom';
import { TodoContext } from '../todoContext';

class Todocontainer extends Component{
static contextType = TodoContext;
    render(){
        let data = this.context
        return(
            <Switch>
            <Route exact path='/'>
                <Navbar />
                <div className='container'>
                    <div className='inner'>
                <Header />
                <Inputtodo />
                <Todolist />
                <button onClick={data.downloadDoc} className='downloadButton'>download {data.buttonName}</button>
                </div>
                </div>
            </Route>
            <Route path='/about'component={About}/>  
            <Route path='*'>
                <ErrorPage />
            </Route>
            </Switch>
        )
    }
}

export default Todocontainer