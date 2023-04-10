import React from "react";
import "./ViewLocation.css";
import { useLocation } from "react-router-dom";

const ViewLocation = () => {

    const location = useLocation();

    const string = location.state;

    console.log(string);
    
    return(
        <div className="ViewLocation">
            <h1>View Location of {string}</h1>

            
            <br />
            <br />
            <img className="ViewLocationImg" src="https://cdn.discordapp.com/attachments/1065155697408495646/1094993303201652847/demo.PNG"/>
        </div>
    )
}

export default ViewLocation;