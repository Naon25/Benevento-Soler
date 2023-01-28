import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {

  return(
    <>
      <NavBar />
      <ItemListContainer 
      nro={1}
      nombre= {"Item"} 
      precio={"$$"} />
    </>
  );
}

export default App;
