import React from "react";
import "./Item.css"
import { Link } from "react-router-dom";


const Item = ({ prod }) => {


    return (
        <Link to={`/item/${prod.id}`}>
            <div className="card">
                <img src={prod.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-title">{prod.title}</h4>
                    {/*<p className="card-text">{product.description}</p>*/}
                    <button className="btn-primary">${prod.price}</button>
                </div>
            </div>
        </Link>
    )
}


export default Item