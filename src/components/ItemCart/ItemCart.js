import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import './ItemCart.css';

const ItemCart = ({ product }) => {
    const mycontext = useContext(CartContext);
    return (
        <div className="cart-item">
            <img src={product.img} className="cart-img" alt="..." />
            <h4 className="cart-title">{product.title}</h4>
            <h4>${product.price}</h4>
            <div className="counter-container">
                <span className="counter-text">QTY:</span>
                <div className="cart-counter">
                    <span className="cart-counter-button">-</span>
                    <span className="cart-counter-num">{product.quantity}</span>
                    <span className="cart-counter-button">+</span>
                </div>
            </div>
            <span className="minus-product-button" onClick={() => { mycontext.removeProduct(product.id)}} >X</span>
        </div>
    )
}

export default ItemCart