import React, { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const Collection = () => {
    const [products,setProduct] = useState([]);
    console.log(products);
    useEffect(() => {
        const db = getFirestore();

        const itemCollection = collection(db, "bikes");
        getDocs(itemCollection).then((snapshot) =>{
            const docs = snapshot.docs.map((doc) => doc.data());
            setProducts(docs);
        });
    },[]);

    return (
        <div>
            <h1>Productos</h1>
            {products.map((product) =>(
                <div key={product.nombre}>
                    <h4>Producto: {product.nombre}</h4>
                    <p>Categoria: {product.categoria}</p>
                    <p>Precio: {product.precio}</p>
                </div>
            ))}
        </div>
    );
}

export default Collection;