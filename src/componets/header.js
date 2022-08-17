import React from "react";
import { useState } from "react";

const Header = ({connected,detectCurrentProvider}) => {
    

    
    return(
        <header className="header-wrap">
            <h1 className="header-logo">Mario Hernadez</h1>
            <button className="header-btnWallet"> <span className="header-iconWallet"></span> Mi Billetera</button>
            {connected}
            <button onClick={()=>{detectCurrentProvider()}}>tendre que hacer algo</button>

        </header>
    )
}


export default Header