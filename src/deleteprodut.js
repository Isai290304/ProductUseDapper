import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ProductDelete() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch("https://localhost:7068/Product/"+id)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.log(err));
  }, [id]);

  const handleDelete = () => {
    fetch("https://localhost:7068/Product/"+id, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        alert("Deleted")
        navigate('/product-list');
      })
      .catch(err => console.log(err));
  }

  return (
    <div>
      <h1>Are you sure you want to delete this product?</h1>
      <p><strong>Name:</strong> {product.name}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Created On:</strong> {product.createdOn}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default ProductDelete;
