import React from "react";
import Item from "../Item/Item";


const ItemList = ({ prod }) => {
    return (
        <>
            {prod.map(prod => <Item key={prod.id} prod={prod} />)}
        </>
    )
}

export default ItemList