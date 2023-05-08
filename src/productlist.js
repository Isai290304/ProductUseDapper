import React from 'react';
import './tableborder.css';
import { useState, useEffect } from "react";
export function ProductList(props) {
    const [products, setProduct] = useState([]);
    useEffect(() => {
        fetch("https://localhost:7068/Product")
            .then(res => res.json())
            .then((result) => { setProduct(result); }
            ); }, []);
    return (
        <div>
            <h2>Product Data...</h2>
            <table className="table-bordered" >
                <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Description</th>
                    <th>Date Created On</th>
                    <th>Action    </th>
                </tr>
            </thead>
                <tbody>
                    {products.map(emp => (
                        <tr key={emp.id}>

                            <td>{emp.name}</td>
                            <td>{emp.description}</td>
                            <td>{emp.createdOn}</td>
                            <td> <a href={'/singleproduct/' + emp.id}>display </a>
                             <a href={'/updateproduct/' + emp.id}>Edit </a>
                           <a href={'/deleteproduct/' + emp.id}>delete </a> </td>
                        </tr>
                    ))}
                </tbody> </table>
                <h3><a href={'/addproduct/' }>ADD New Product</a></h3>
                
                </div>
    );
}
export default ProductList;

