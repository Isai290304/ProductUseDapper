import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./productlist";
import { Singleproduct } from "./singleproduct";
import AddProduct from "./addproduct";
import UpdateProduct from "./UpdateProduct";
import ProductDelete from "./deleteprodut";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/singleproduct/:id" element={<Singleproduct />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/updateproduct/:id" element={<UpdateProduct />} />
        <Route path="/deleteproduct/:id" element={<ProductDelete/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
