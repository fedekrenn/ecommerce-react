import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <main>
        <h1>Bike Store - Tienda de ciclismo</h1>
        <ItemListContainer />
      </main>
    </>
  );
}

export default App;
