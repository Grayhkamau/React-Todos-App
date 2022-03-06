import React, {Component} from "react";
import { NavLink, Route} from "react-router-dom";
import SinglePage from "./singlepage";


class About extends Component{
    render(){
        let path = this.props.match.path;
        let url = this.props.match.url
        return(
            <div className='aboutContent'>
            <ul className="aboutList menuNav" style={{width:'100%',paddingLeft:'20px'}}>
                <li><NavLink to={`${path}/about-app`}>About App</NavLink></li>
                <li><NavLink to={`${path}/about-author`}>About Author</NavLink></li>
                <li><NavLink to='/'>Home</NavLink></li>
            </ul>
            <Route path={`${url}/:slug`} component={SinglePage}/>
            </div>
        )
    }
}


export default About
