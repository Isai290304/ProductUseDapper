import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
export function Singleproduct(props) {
    const [product, setProduct] = useState({});
    const { id } = useParams()
    useEffect(() => {
        fetch("https://localhost:7068/Product/" + id)
            .then(res => res.json())
            .then((result) => { setProduct(result); }
            );
    }, {});
    return (
        <div><label>ID : </label>
            {product.id}<br />
            <label>name: </label>
            {product.name}<br />
            <label>Description: </label>
            {product.description}<br />
            <label>Created On: </label>
            {product.createdOn}
            </div>
    );
}
export default Singleproduct;
