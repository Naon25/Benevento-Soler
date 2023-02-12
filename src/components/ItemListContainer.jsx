import { useState } from "react";
import {  } from '@chakra-ui/react';

const ItemListContainer = () => {

  const [ nombre, setNombre ] = useState("Hook");
  const [ suma, setSuma ] = useState(0);

  const sumar=() => {
    setSuma( suma + 1 );
  }
  
  // const [ total, setTotal ] = useState(0);
  // const [ usuarios, setUsuarios ] = useState([]);
  // const [ modal, setModal ] = useState(false);

  return (
    <>
    <h1>{nombre}</h1>
    <button onClick={() => setNombre("Nuevo Hook")}>Cambiar Nombre</button>
    <p>{suma}</p>
    <button colorScheme='teal' size='sm' onClick={sumar}>Sumar</button>
    <button onClick={()=>{setSuma(0)}}>Vaciar</button>
    </>
  )
}

export default ItemListContainer;