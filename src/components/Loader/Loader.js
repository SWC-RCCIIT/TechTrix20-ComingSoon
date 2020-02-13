import React, { Component } from 'react'
import './Loader.css';
import {Animated} from "react-animated-css";

export class Loader extends Component {
    render() {
        return (
            <center>
     <Animated className="image_container" animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                <img id="img-ld" src="./img/logo-2.png" alt="techtrix" />

        </Animated>
                </center>
       
           
        )
    }
}

export default Loader;
