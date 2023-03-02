import { useContext } from 'react';
import { CartContext } from './CartContext';

const ComponenteA = () => {
  const { cart, setCart} = useContext(CartContext);
  console.log(cart);

  return <div>{cart}</div>;
  
}

export default ComponenteA;