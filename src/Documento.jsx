import React, { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const Document = () => {
    const [product,setProduct] = useState([]);
    console.log(product);
    useEffect(() => {
        const db = getFirestore();

        const oneItem = doc(db,"bikes","P7Pl6vR9PjocFiSZVuuT");

        getDoc(oneItem).then((snapshot) =>{
            if (snapshot.exists()) {
                const docs = snapshot.data();
                setProduct(docs);
            }
        });
    },[]);

    return (
        <div>
            <h1>Producto</h1>
            {
                <div>
                    <h4>Producto: {product.nombre}</h4>
                    <p>Categoria: {product.categoria}</p>
                    <p>Precio: {product.precio}</p>
                </div>
            }
        </div>
    );
}

export default Document;