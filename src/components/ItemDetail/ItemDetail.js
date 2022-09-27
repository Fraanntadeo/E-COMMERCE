import React, { useState, useContext } from "react";
import '../ItemDetail/ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import '../ItemDetail/ItemDetail.css'

const ItemDetail = ({ item }) => {
    const [goCart, setGoCart] = useState(false);
    const { addProduct } = useContext(CartContext);
    const onAdd = (quantity) => {
        setGoCart(true);
        addProduct(item, quantity)
    }
    return (
        <div className="detail-card">
            <div className="product-img">
                <img src={item.img} className="img" alt="..." />
            </div>
            <div className="product-info">
                <h1 className="detail-title">{item.title}</h1>
                <p className="detail-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam qui nobis iste nisi labore odit ab obcaecati ut, magnam cumque? Suscipit perspiciatis ad impedit ullam quos rem, velit magni consequatur!</p>
                <h2 className="detail-price">${item.price}</h2>
                <div>
                    {
                        goCart
                            ? <Link to='/cart'>
                                <button className="add-cart-btn">
                                    <h2 className="add-cart-text">Finalizar Compra</h2>
                                </button>
                            </Link >
                            : <ItemCount stock={10} initial={1} onAdd={onAdd} />
                    }
                </div>
            </div>
        </div>
    );
}

export default ItemDetail