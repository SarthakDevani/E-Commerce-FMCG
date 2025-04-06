import { Routes, Route } from "react-router-dom";

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

function App() {
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
      </Routes>
    </div>
  );
}

export default App;
