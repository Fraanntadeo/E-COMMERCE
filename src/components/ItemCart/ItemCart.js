import React from 'react'
import './ItemCart.css';


const ItemCart = ({ product }) => {
    return (
        <div className="cart-item">
            <img src={product.img} className="cart-img" alt="..." />
            <h4 className="cart-title">{product.title}</h4>
            <h4>${product.price}</h4>
            {/*<div className="counter-container">
                <span className="counter-text">QTY:</span>
                <div className="cart-counter">
                    <span className="cart-counter-button">+</span>
                    <span className="cart-counter-num">{product.quantity}</span>
                    <span className="cart-counter-button">-</span>
                </div>
            </div>*/}
            <span className="minus-product-button">X</span>
        </div>
    )
}

export default ItemCart