import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import ItemCart from '../ItemCart/ItemCart';
import { CartContext } from '../../context/CartContext';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import "./Cart.css"

export const Cart = () => {
  const { cart, totalPrice, clearCart } = useContext(CartContext);

  const order = {
    buyer: {
      name: 'Franco',
      email: 'Franco@hotmail.com',
      phone: '123456789',
      address: 'asdasd',
    },
    items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity })),
    total: totalPrice(),
  }

  const handleClick = () => {
    const db = getFirestore();
    const orderCollection = collection(db, 'orders');
    addDoc(orderCollection, order)
      .then(({ id }) => alert(id))
  }
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
        <button onClick={clearCart} className="btn">ELIMINAR TODOS LOS PRODUCTOS</button>
      {
        cart.map(product => <ItemCart key={product.id} product={product} />)
      }
      <p>
        total:${totalPrice()}
      </p>
      <button onClick={handleClick} className="btn">Generar orden de compra</button>
    </>
  )
}

export default Cart