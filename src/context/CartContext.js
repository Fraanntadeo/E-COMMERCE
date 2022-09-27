import React, { useState, createContext } from 'react'

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const addProduct = (item, quantity) => {
        if (isInCart(item.id)) {
            item.cantidad = quantity
            setCart(
                [...cart, item]
            );
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    }
    const clearCart = () => setCart([]);
    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;
    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id))
    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
    }
    const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);
    return (
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            removeProduct,
            addProduct,
            totalPrice,
            totalProducts,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider