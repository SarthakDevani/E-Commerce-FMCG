import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

import "./App.css";

import LoginPage from "./pages/loginPage.jsx";
import SignUpPage from "./pages/signUpPage.jsx";
import ActivatePage from "./pages/activatePage.jsx";
import HomePage from "./pages/homePage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import BestSellingPage from "./pages/BestSellingPage.jsx";
import EvevtsPage from "./pages/EventsPage.jsx";
import FAQPage from "./pages/FAQPage.jsx";
import ProductsDetailsPage from "./pages/ProductsDetailsPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import SellerPage from "./pages/SellerPage.jsx";
import { storeProduct } from "./features/Home/productSlice.js";
import { storecityState } from "./features/cityState/cityStateSlice.js";

import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("http://localhost:8000/products");
      const cityState = await axios.get("http://localhost:8000/cityState");

      if (response.data) {
        dispatch(storeProduct(response.data));
      }
      if (cityState.data) {
        dispatch(storecityState(cityState.data));
      }
    };
    fetchProducts();
  }, [dispatch]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/activate" element={<ActivatePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/best-selling" element={<BestSellingPage />} />
        <Route path="/events" element={<EvevtsPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/product/:name" element={<ProductsDetailsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/seller" element={<SellerPage />} />
      </Routes>
    </div>
  );
}

export default App;
