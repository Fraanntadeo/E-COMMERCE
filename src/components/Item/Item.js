import React from "react";
import "./Item.css"
import { Link } from "react-router-dom";


const Item = ({ prod }) => {


    return (
        <div className="Contenedor">
            <div>
                <h2>{prod.title}</h2>
            </div>
            <div>
                <img src={prod.img} className="Imagen" />
            </div>
            <div>
                <p>$ {prod.price}</p>
            </div>
            <Link to={`/item/${prod.id}`}><button className="btn">Ver Mas!</button></Link>
        </div>
    )
}


export default Item