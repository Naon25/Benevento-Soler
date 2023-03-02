import { CartContext } from "./CartContext";
import { useState } from "react";


const StateComponent = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  }

  const decrement = () => {
    setCounter(counter - 1);
  }

  const reset = () => {
    setCounter(0);
  }  

  return (
    <CartContext.Provider value={{ counter, increment,
    decrement, reset}}>
        {children}
    </CartContext.Provider>
  );
};

export default StateComponent