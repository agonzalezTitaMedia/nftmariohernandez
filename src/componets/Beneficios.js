import React from "react";
import autenticidad from '../assets/autenticidad.svg';
import visita from '../assets/visita.svg';
import productos from '../assets/productos.svg';

const Beneficios = ()=>{
    return(
        <>
            <p className="definition-title">Beneficios NFT´s MARIO HERNÁNDEZ</p>
            <div className="beneficios-wrapCol">

                <div className="beneficios-col">
                    <img src={autenticidad} />
                    <div className="beneficios-wrapText">
                        <div className="definition-subTitle">Certificación de autenticidad</div>
                        <div className="definition-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    </div>
                </div>


                <div className="beneficios-col">
                    <img src={visita} />
                    <div className="beneficios-wrapText">
                        <div className="definition-subTitle">Certificación de autenticidad</div>
                        <div className="definition-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    </div>
                </div>


                <div className="beneficios-col">
                    <img src={productos} />
                    <div className="beneficios-wrapText">
                        <div className="definition-subTitle">Certificación de autenticidad</div>
                        <div className="definition-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Beneficios;