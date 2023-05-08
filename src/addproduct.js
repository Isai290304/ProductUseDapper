import React, { useState } from 'react';

function AddProduct() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();

    const product = { name: name, Description: description };

    fetch('https://localhost:7068/Product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      alert('Product added successfully!');
      setName('');
      setDescription('');
    })
    .catch(err => {
      console.log(err);
      alert('Failed to add product!');
    });
}
  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} className="form-control" required />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <input type="text" value={description} onChange={e => setDescription(e.target.value)} className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default AddProduct;
