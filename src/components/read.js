import React from "react";
import { Books } from './books'


export class Read extends React.Component{
    //Holds the book array in the state of the component
    state = {
        books:[
            {
            "title": "Learn Git in a Month of Lunches",
            "isbn": "1617292419",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
            "status": "MEAP",
            "authors": ["Rick Umali"],
            "categories": []
            },
            {
            "title": "MongoDB in Action, Second Edition",
            "isbn": "1617291609",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg","status": "MEAP",
            "authors": [
            "Kyle Banker",
            "Peter Bakkum",
            "Tim Hawkins",
            "Shaun Verch",
            "Douglas Garrett"
            ],
            "categories": []
            },
            {
            "title": "Getting MEAN with Mongo, Express, Angular, and Node",
            "isbn": "1617292036",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg","status": "MEAP",
            "authors": ["Simon Holmes"],
            "categories": []
            }
        ]        
    }

    
    render(){
        //Displays the read component and passes the book json information into the Books component
        return(
            <div>
                <h2>Read Component</h2>
                <Books books={this.state.books}></Books>
            </div>
        )
    }
}