import React from 'react';

const Componente2 = () => {
    const aplicarDescuento = new Promise((resolve, reject) => {
        const descuento = false;
        if(descuento){
            resolve("Descuento aplicado");
        }else{
            reject("No se pudo aplicar el descuento");
        }
    })

    // console.log(aplicarDescuento);

    aplicarDescuento
    .then((resultado)=>{
        console.llog(resultado);
    })
    .catch((error)=>{
        console.log(error);
    });

    return (<>


    </>)
}

export default Componente2