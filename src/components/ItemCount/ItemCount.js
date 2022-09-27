import React, { useState } from "react";
import "./ItemCount.css";

export const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(initial);
    const decrease = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }
    const increase = () => {
        if (count < stock) {
            setCount(count + 1);
        };
    }
    return (
        <div className='add-cart'>
            <div className="counter">
                <span className="counter-button" disabled={count <= 1} onClick={decrease}>-</span>
                <span className="counter-num">{count}</span>
                <span className="counter-button" disabled={count >= stock} onClick={increase}>+</span>
            </div>
            <div>
                <button className="add-cart-btn" disabled={stock <= 0} onClick={() => onAdd(count)}>
                    <h2 className="add-cart-text">Añadir al Carrito</h2>
                </button>
            </div>
        </div>
    );
}

export default ItemCount;