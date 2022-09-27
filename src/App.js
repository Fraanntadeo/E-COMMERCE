import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Navbar from "./components/Navbar/Navbar";
import CartProvider from "./context/CartContext";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path='/' element={<ItemListContainer />} />
            <Route path='/:categoria' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}
export default App; 