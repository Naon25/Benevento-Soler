import React from 'react';

const ArrayMap = () => {
    const productos = [
        {
            id: "1",
            nombre: "producto1",
            description: "descripcion del primer producto",
            stock: 100,
        },
        {
            id: "2",
            nombre: "producto2",
            description: "descripcion del segundo producto",
            stock: 200,
        },
        {
            id: "3",
            nombre: "producto3",
            description: "descripcion del tercer producto",
            stock: 200,
        },
    ];

    const mostrarProductos = new Promise((resolve, reject) =>{
        if (productos.length > 0){
            setTimeout(() => {
                resolve(productos);
            }, 3000)
        }else{
            reject("No hay productos");
        }
    });

    mostrarProductos
    .then((resultado)=>{
        console.log(resultado);
    })
    .catch((error)=>{
        console.log(error);
    })

    
    return (<>
    {
        productos.map((item)=>{
            return(
                <div key={item.id}>
                    <h1>{item.nombre}</h1>
                    <h2>{item.description}</h2>
                    <h3>{item.stock}</h3>
                </div>
            );
        })
    }
    </>   
    )
}

export default ArrayMap