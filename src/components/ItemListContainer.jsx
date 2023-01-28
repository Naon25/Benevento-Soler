import React from 'react'

const ItemListContainer = ({nro, nombre, precio}) => {
  return (
    <>
    <h1>{nombre} </h1>
    <h2>{nro}</h2>
    <h3>{precio}</h3>
    </>
  )
}

export default ItemListContainer