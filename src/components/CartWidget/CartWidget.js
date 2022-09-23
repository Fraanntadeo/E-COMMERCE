import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {
    const { totalProducts } = useContext(CartContext);

    return (
        <>
            <i className="bi bi-cart3"></i>
            <span>{totalProducts()}</span>
        </>
    );
}


export default CartWidget;