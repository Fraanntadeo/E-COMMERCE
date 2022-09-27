import React from "react";
import Item from "../Item/Item";
import './ItemList.css'

const ItemList = ({ prod }) => {
    return (
        <div className="itemContainer">
            {prod.map(prod => <Item key={prod.id} prod={prod} />)}
        </div>
    )
}

export default ItemList