import React from "react";
import { BooksItem } from "./booksItem";


export class Books extends React.Component{
    render(){
        return this.props.books.map(
            (book)=>{
                //passes the book array taken from json info and key to the booksItem component
                return <BooksItem book={book} key={book.isbn}></BooksItem>
            }
        );

    }
}