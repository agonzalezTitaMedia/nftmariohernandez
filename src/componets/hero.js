import React, { useState } from "react";

import genesis from "../assets/genesis.png"
import MainBtn from "./MainBtn";
import imageNft from "../assets/example-nft.jpg"
import ScrollDown from "../assets/scroll-down.svg"

const Hero = ({connected,ethBalance,listNft})=>{
    
    return(
        <div className="hero-wrap">
            
            <button className="secondBtn secondBtn--hero">¿Qué son los NFT´s?</button> 
            {connected ? (
                <>
                    <div className="nft-wrap">
                        <div className="nft-wrapImg">
                            <img src={imageNft} alt="nft"/> 
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
                    <p>Tus Nfts :</p>
                    {listNft.map((data,index)=>{
                      var idLast =  data.slice(-1)
                        return(
                            <a 
                            key={index}
                            target="_blank"
                            href={'https://testnets.opensea.io/assets/rinkeby/0x12f03749c6b06d6751e3c41a51c60d685ad40056/' +  idLast}
                            >
                                {idLast}
                            </a>
                        )
                    })}
                    <p></p>

                     
                </>
            )
                
            :
                (
                    <>
                        <img src={genesis} className="hero-genesis"/>
                            <MainBtn text={'Ver colecciones'}/>
                        <img src={ScrollDown} className="hero-scroll"/>
                    </>
                )
            }


            
        </div>
    )
}

export default Hero                 