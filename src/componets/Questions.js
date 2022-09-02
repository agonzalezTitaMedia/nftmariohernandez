import React, { useState } from "react";

const Questions = () => {

    const [ numberQuestion, setNumberQuestion ] = useState(0);
    const clickQuestion = (number) =>{
        setNumberQuestion(number)
    }
    return(
        <>
            <div className="questions-wrapMain">
                <h3 className="questions-title">PREGUNTAS FRECUENTES</h3>
                <p className="questions-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. </p>
                <div className="questions-wrapMainQuestions">
                    <div className="questions-rowQuestions">
                        <div className="questions-topRow" onClick={()=>{clickQuestion(1)}}>
                            <div>¿Pregunta 1?</div>
                            <span className="questions-downQuestion"></span>
                        </div>
                        <div className={ numberQuestion == 1 ? "questions-botRow show" : "questions-botRow" }>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. 
                        </div>
                    </div>

                    <div className="questions-rowQuestions">
                        <div className="questions-topRow"  onClick={()=>{clickQuestion(2)}}>
                            <div>¿Pregunta 2?</div>
                            <span className="questions-downQuestion"></span>
                        </div>
                        <div className={ numberQuestion == 2 ? "questions-botRow show" : "questions-botRow" }>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. 
                        </div>
                    </div>

                    <div className="questions-rowQuestions">
                        <div className="questions-topRow"  onClick={()=>{clickQuestion(3)}}>
                            <div>¿Pregunta 3?</div>
                            <span className="questions-downQuestion"></span>
                        </div>
                        <div className={ numberQuestion == 3 ? "questions-botRow show" : "questions-botRow" }>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. 
                        </div>
                    </div>

                    <div className="questions-rowQuestions">
                        <div className="questions-topRow"  onClick={()=>{clickQuestion(4)}}>
                            <div>¿Pregunta 4?</div>
                            <span className="questions-downQuestion"></span>
                        </div>
                        <div className={ numberQuestion == 4 ? "questions-botRow show" : "questions-botRow" }>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. 
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Questions