import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import {AiOutlineMenu} from 'react-icons/ai'

class Navbar extends Component{
    state = {
        open:false
    };
    handleClick = ()=>{
        this.setState(prevState=>{
            return{
                open:!prevState.open
            } 
        })
    }
    closeMenu = ()=>{
        this.setState({
            open:false
        })
    }
    render(){
        return(
            <div className='navBar'>
            <button onClick={this.handleClick}>{this.state.open?'close Navigation':<AiOutlineMenu style={{fontSize:'25px'}}/>}</button>
            <ul className={`menuNav ${this.state.open?'showMenu':''}`}>
                <li><NavLink to='/' onClick={this.closeMenu}>Home</NavLink></li>
                <li><NavLink to='/about' onClick={this.closeMenu}>About</NavLink></li>
            </ul>
            </div>
        )
    }
}

export default Navbar