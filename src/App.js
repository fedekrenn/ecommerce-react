import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <h1>Bike Store - Tienda de ciclismo</h1>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Productos Recomendados'} />}/>
          <Route path='/item/:id' element={<ItemDetailContainer />}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </main>
    </BrowserRouter >

  );
}

export default App;
