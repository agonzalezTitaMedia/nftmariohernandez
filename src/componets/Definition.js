import React from "react";
import MainBtn from "./MainBtn";
import butterfly from '../assets/butterfly.png';

const Definition = () => {
    return (
        <>
            <div className="definition-wrap">
                <div className="definition-rowTop">
                    <img src={butterfly} alt='nft Mario Hernandez' className="definition-butterfly" />
                    <h3 className="definition-title">¿Qué son los NFT´s?</h3>
                    <p className="definition-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus.</p>
                    <MainBtn text={'Ver Video'}/>
                </div>

                <div className="definition-bottomRow">
                    <h4 className="definition-subTitle">¿Cómo puedo obtener los NFT´s?</h4>
                    <div className="definition-wrapColBottom">

                        <div className="definition-colInfo">
                            <div className="defintion-titleStep">Paso 1</div>
                            <p className="definition-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. </p>
                        </div>
                        <div className="definition-colInfo">
                            <div className="defintion-titleStep">Paso 2</div>
                            <p className="definition-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. </p>
                        </div>
                        <div className="definition-colInfo">
                            <div className="defintion-titleStep">Paso 3</div>
                            <p className="definition-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. </p>
                        </div>
                        <div className="definition-colInfo">
                            <div className="defintion-titleStep">Paso 4</div>
                            <p className="definition-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. </p>
                        </div>
                        <div className="definition-colInfo">
                            <div className="defintion-titleStep">Paso 5</div>
                            <p className="definition-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. </p>
                        </div>

                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Definition