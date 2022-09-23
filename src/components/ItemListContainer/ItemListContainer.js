import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css"
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, where, query } from 'firebase/firestore';


export const ItemListContainer = () => {
    const [productos, setproductos] = useState([]);
    const { categoria } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'products');
        if (categoria) {
            const queryFilter = query(queryCollection, where('categoria', '==', categoria))
            getDocs(queryFilter)
                .then(res => setproductos(res.docs.map(product => ({ id: product.id, ...product.data() }))))
        }
        else {
            getDocs(queryCollection)
                .then(res => setproductos(res.docs.map(product => ({ id: product.id, ...product.data() }))))
        }
    }, [categoria])




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