import Header from "./components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  const products = "Product List"
    const productsCounter = "Total Count = "
  return (
    <div className="App">
        <Header/>
          <ItemListContainer tittle="Welcome To Fitnesty" products= {products} productsCounter={productsCounter}/>
          </div>
  );
}

export default App;
