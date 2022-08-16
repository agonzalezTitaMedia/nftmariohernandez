import React from "react";
import genesis from "../assets/genesis.png"
import MainBtn from "./MainBtn";

const Hero = ()=>{
    return(
        <div className="hero-wrap">
            <img src={genesis} className="hero-genesis"/>
            <MainBtn text={'Ver colecciones'}/>
            <button></button> 
        </div>
    )
}

export default Hero                 