/*
    Second exercise
*/
import React from 'react';

const Second=()=>{
    const datos=["f","o","o","b","a","r"];
    const posicionesDatos=[];
    return(
        <div>
            {
            datos.map((dato, indice)=>{
                console.log("El dato "+dato + " está en el indice "+indice);
                //we create to array with the positions to the previous array
                posicionesDatos.push(indice);
                
            })}
            
            {
            posicionesDatos.map((posiciones)=>{
                return (
                    <div>
                        <h1>{posiciones}</h1>
                    </div>
                )
            })}
        </div>
    )
}
export default Second;
