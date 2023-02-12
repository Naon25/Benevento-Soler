import { useState, useEffect} from 'react';

const Componente1 = () => {
    const [mensaje, setMensaje] = useState("Hola Mundo");

    useEffect(() => {
        console.log("Componente montado...");
    });

    return <>
    <div>
        <p>{mensaje}</p>
    </div>
    </>
    

}

export default Componente1;