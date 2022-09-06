import React, { useState } from "react";
import axios from "axios";

import genesis from "../assets/genesis.png"
import MainBtn from "./MainBtn";
import imageNft from "../assets/example-nft.jpg"
import ScrollDown from "../assets/scroll-down.svg"

const Hero = ({connected,ethBalance})=>{

    const [ dataNft, setDataNft] = useState()
    
    const options = {
        method: 'GET',
        url: 'https://eth-rinkeby.g.alchemy.com/nft/v2/vbBcAkWkcLUdBfrN1GJmyAkWxc7_O9_c/getNFTs',
        params: {
          owner: '0x7F9691fAa9D935b5B55e3ac4E3399161e7ab37F6',
          'contractAddresses[]': '0x12f03749c6b06d6751e3c41a51c60d685ad40056',
          withMetadata: 'true'
        },
        headers: {Accept: 'application/json'}
      };
      
      axios 
        .request(options)
        .then(function (response) {
          console.log(response.data.ownedNfts);
            
        })
        .catch(function (error) {
          console.error(error);
        });


        


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