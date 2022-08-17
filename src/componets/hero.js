import React from "react";
import genesis from "../assets/genesis.png"
import MainBtn from "./MainBtn";
import imageNft from "../assets/example-nft.jpg"

const Hero = ({connected,ethBalance})=>{
    return(
        <div className="hero-wrap">
            
            <button className="secondBtn secondBtn--hero">¿Qué son los NFT´s?</button> 
            {connected ? (
                <>
                    <div className="nft-wrap">
                        <div className="nft-wrapImg">
                            <img src={imageNft}/>
                        </div>
                        <div className="nft-wrapTxt">
                            <div className="nft-colTxt">
                                <p className="nft-name">Mariposas Azul Aleteo cayena</p>
                            </div>
                            <div className="nft-colTxt nft-colTxt--info">
                                <p className="nft-valueTxt">Valor:</p>
                                <p className="nft-value">4.89 Eth</p>
                            </div>
                        </div>

                    </div>
                    <p>saldo Eth: {ethBalance}</p>
                </>
            )
                
            :
                (
                    <>
                        <img src={genesis} className="hero-genesis"/>
                            <MainBtn text={'Ver colecciones'}/>
                    </>
                )
            }


            
        </div>
    )
}

export default Hero                 