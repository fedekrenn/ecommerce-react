import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './pages/Cart/Cart';
import NotFound from './pages/NotFound'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Productos Recomendados'} />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/category/:category' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter >
    </CartProvider>
  );
}

export default App;
