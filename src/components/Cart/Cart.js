import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import ItemCart from '../ItemCart/ItemCart';
import { CartContext } from '../../context/CartContext';


export const Cart = () => {
  const { cart, totalPrice } = useContext(CartContext);
  if (cart.length === 0) {
    return (
      <div>
        <p>No hay productos</p>
        <Link to='/'>Comprar mas</Link>
      </div>
    )
  }

  return (
    <>
      {
        cart.map(product => <ItemCart key={product.id} product={product} />)
      }
      <p>
        total: {totalPrice()};
      </p>
    </>
  )
}

export default Cart