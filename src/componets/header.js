import React from "react";

const Header = ({onConnect}) => {
    

    
    return(
        <header className="header-wrap">
            <h1 className="header-logo">Mario Hernadez</h1>
            <button className="header-btnWallet" 
                onClick={()=>{onConnect()}}> 
                <span className="header-iconWallet"></span> 
                Mi Billetera
            </button>
        </header>
    )
}


export default Header