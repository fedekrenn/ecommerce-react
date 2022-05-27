import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <>
      <NavBar />
      <main>
        <h1>Bike Store - Tienda de ciclismo</h1>
        <ItemListContainer greeting={'Productos Recomendados'}/>
        <ItemDetailContainer/>
      </main>
    </>
  );
}

export default App;
