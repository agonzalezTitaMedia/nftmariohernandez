import React from "react";

const Header = ({connected,onConnect, disConnect}) => {
    

    
    return(
        <header className="header-wrap">
            <h1 className="header-logo">Mario Hernadez</h1>
            


            {connected ? 
                <>
                <button className="header-btnWallet" 
                    onClick={()=>{disConnect()}}> 
                    <span className="header-iconWallet"></span> 
                    Desconectar
                </button>
                </>
            : <>
                <button className="header-btnWallet" 
                    onClick={()=>{onConnect()}}> 
                    <span className="header-iconWallet"></span> 
                    Mi billetera
                </button>
            </> }

           
        </header>
    )
}


export default Header