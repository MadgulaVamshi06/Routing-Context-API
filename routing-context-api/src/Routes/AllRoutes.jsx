// src/components/AllRoutes.jsx
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About"
import Products from "../Pages/Products";
import ProductDetails from "../Pages/ProductDetails";

function AllRoutes() {
  return (
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/*" element={<> You are Lost </>} />
        </Routes>  
  );
}

export default AllRoutes;
