import Componente2 from "./components/Pruebas/Componente2";
import ArrayMap from "./components/ArrayMap";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import Home from "./components/Home";
import About from "./components/About"; 
import NavBar from "./components/NavBar";
import {BrowserRouter, Routes, Route} from "react-router-dom";

const App = () => {


  return(
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route exact path="/" element={<Home/>}  />
        <Route exact path="/about" element={<About/>}  />
      </Routes>

      {/* <ArrayMap /> */}
      {/* <Componente2 /> */}
      
    </BrowserRouter>
  );
}

export default App;
