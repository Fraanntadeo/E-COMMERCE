import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail'
import ListaProductos from '../mock/Mock';

const ItemDetailContainer = () => {
    const [productos, setUnProducto] = useState({});
    const { id } = useParams()
    const getData = (data) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (id) {
                    resolve(data.find((item) => item.id === parseInt(id)));
                };

            });
        });
    };

    useEffect(() => {
        getData(ListaProductos)
            .then(data => setUnProducto(data))
    }, [id])
    return (

        <ItemDetail item={productos} />

    )
}


export default ItemDetailContainer