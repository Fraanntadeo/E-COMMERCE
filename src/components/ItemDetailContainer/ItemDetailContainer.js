import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail'
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [productos, setUnProducto] = useState({});
    const { id } = useParams()

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'products', id)
        getDoc(queryDoc)
            .then(res => setUnProducto({ id: res.id, ...res.data() }))
    }, [id])

    return (
        <ItemDetail item={productos} />
    )
}


export default ItemDetailContainer