import "./BgImgStyles.css";

import React, { Component } from "react";

class BgImg extends Component {
    render(){

        return(
            <div  className="heading-img">
                <div className="heading">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>   
            </div>
        )
    }
}

export default BgImg