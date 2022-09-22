import React, { useState, useContext } from "react";
import '../ItemDetail/ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";


const ItemDetail = ({ item }) => {
    const [goCart, setGoCart] = useState(false);
    const { addProduct } = useContext(CartContext);
    const onAdd = (quantity) => {
        setGoCart(true);
        addProduct(item, quantity)
    }
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={item.img} className="img-fluid rounded-start" alt={item.title} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.description}</p>
                        <p className="card-text">{item.quantity}</p>
                        <p className='card-text'>${item.price}</p>
                    </div>
                    <div>
                        {
                            goCart
                                ? <Link to='/cart'>Finalizar Compra</Link >
                                : <ItemCount stock={10} initial={1} onAdd={onAdd} />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail
