import React from 'react';
import { BiSmile } from 'react-icons/bi';
import { FaReact } from 'react-icons/fa';
import  flag  from "../Images/pakistan.png";

export default function Home() {
    return (
        <div>
            <div id="intro">
                <h1>Hi! <BiSmile style={{ color: "yellow" }} /></h1>
                <h1>I am <i>Muzammil Irshad</i></h1>
                <h3>REACT JS FRONT-END DEVELOPER <FaReact style={{ color: "blue", fontSize: "50px" }} /></h3>
                <h4>from PAKISTAN <img src={flag} style={{ height: "50px", width:"60px" }} /></h4>
            </div>
        </div>
    );
}
