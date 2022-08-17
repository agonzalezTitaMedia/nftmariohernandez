import React from "react";
import genesis from "../assets/genesis.png"
import MainBtn from "./MainBtn";

const Hero = ({connected})=>{
    return(
        <div className="hero-wrap">
            <img src={genesis} className="hero-genesis"/>
            <MainBtn text={'Ver colecciones'}/>
            <button className="secondBtn secondBtn--hero">¿Qué son los NFT´s?</button> 
            {connected}
        </div>
    )
}

export default Hero                 