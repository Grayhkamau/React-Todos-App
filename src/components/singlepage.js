import React,{Component} from "react";


class SinglePage extends Component{
    render(){ 
       let slug = this.props.match.params.slug
       console.log(slug)
        let data = [
            {
                'slug':'about-author',
                'title':'About Author',
                'info':'The creator of this app is Humphrey Kamau'
            },
            {
                'slug':'about-app',
                'title':'About App',
                'info':'just a simple todos react app, with functionalities to add a todo, delete a todo, update a todo by double clicking on it, check a todo, and download a pdf containing all your current todos and their status e.i completed or not'
            }
        ]
        let choosenSlug = data.find(value=>value.slug===slug)
        let {title,info} = choosenSlug;
        return(
            <div className="mainContent">
                <h1>{title}</h1>
                <p>{info}</p>
            </div>
        )
    }
}

export default SinglePage