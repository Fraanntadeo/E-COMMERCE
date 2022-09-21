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
        <div className="counter">
            <h4>10 DE STOCK DISPONIBLE</h4>
            <button disabled={count <= 1} onClick={decrease}>-</button>
            <span>{count}</span>
            <button disabled={count >= stock} onClick={increase}>+</button>
            <div>
                <button disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar</button>
            </div>
        </div>
    );
}

export default ItemCount;