import React from "react";

export class Content extends React.Component{
    render(){
        //Displays the Home Page
        return(
            <div>
                <h2>Hello World</h2>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        )
    }
}