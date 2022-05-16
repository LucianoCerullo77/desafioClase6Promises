import Header from "./components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
    const productsCounter = "Total Count = "
  return (
    <div className="App">
        <Header/>
          <ItemListContainer tittle="Welcome to RYM!"/>
          </div>
  );
}

export default App;
