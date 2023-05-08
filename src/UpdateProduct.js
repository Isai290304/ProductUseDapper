import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditProduct() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://localhost:7068/Product/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { Name, Description } = product;
    const updatedProduct = { Name, Description };
    fetch(`https://localhost:7068/Product/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then(() => {
    
        alert("Product updated successfully!");
        navigate("/products");
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to update product!");
      });
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="Name"
            value={product.Name || ""}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <input
            type="text"
            name="Description"
            value={product.Description || ""}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
}

export default EditProduct;
