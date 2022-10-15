import React from "react";
import Card from 'react-bootstrap/Card';

export class BooksItem extends React.Component{
    render(){
        //Displays the Card along with the book information from the book json info
        return(
            <Card>
            <Card.Header>{this.props.book.title}</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  {' '}
                  <img src={this.props.book.thumbnailUrl}></img>
                  {' '}
                </p>
                <footer className="blockquote-footer">
                {this.props.book.authors[0]}
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        );
    }
}