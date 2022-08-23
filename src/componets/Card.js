import React from "react";
import imageNft from "../assets/example-nft.jpg"


const Card = () => {
    return(
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
        </>
    )
}

export default Card;