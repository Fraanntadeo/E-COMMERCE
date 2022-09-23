import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import './ItemCart.css';


const ItemCart = ({ product }) => {
    const { removeProduct } = useContext(CartContext)
    return (
        <div className='itemCart'>
            <img src={product.img} alt="..."/>
            <div>
                <p>titulo:  {product.title}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio u.: {product.price}</p>
                <p>Subtotal: ${product.quantity * product.price}</p>
                <button onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart