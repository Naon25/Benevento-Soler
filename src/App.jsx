import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/catalogue" element={<ItemListContainer />} />
        <Route
          exact
          path="/category/:category"
          element={<ItemListContainer />}
        />
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />

        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// const App = () => {


//   return(
//     <BrowserRouter>
//       <NavBar />

//       <Routes>
//         <Route exact path="/" element={<Home/>}  />
//         <Route exact path="/about" element={<About/>}  />
//       </Routes>

//       {/* <ArrayMap /> */}
//       {/* <Componente2 /> */}
      
//     </BrowserRouter>
//   );
// }

// export default App;
