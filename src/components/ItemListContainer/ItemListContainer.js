import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css"
import ListaProductos from "../mock/Mock";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
    const [productos, setproductos] = useState([]);
    const { categoria } = useParams();
    const getData = (data) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (categoria) {
                    resolve(data.filter((item) => item.categoria === categoria));
                } else resolve(data);
            }, 2000);
        });
    };

    
    useEffect(() => {
        getData(ListaProductos)
            .then((data) => setproductos(data))
    }, [categoria]);
    return (
        <>
            <div className="centrar">
                <h1>CATALOGO DE PRODUCTOS</h1>
                <div className="contenedor">
                    <ItemList prod={productos} />
                </div>
            </div>
        </>
    );
}


export default ItemListContainer;