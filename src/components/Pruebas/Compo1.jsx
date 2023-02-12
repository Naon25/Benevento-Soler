import React from 'react';

const Compo1 = ({title, price}) => {
    console.log(title, price);
  return (<>
    <h5>Product: {title}</h5>
    <p>$ {price}</p>
  </>
  )
}

    // PRESENTADOR

export default Compo1;