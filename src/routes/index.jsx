import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, ProductListPage, ProductOpenPage, OrderPage, WishListPage, LoginPage, RegisterPage } from "../pages";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ProductListPage />} />
        <Route path="/product/:id" element={<ProductOpenPage />} />
        <Route path="/Order" element={<OrderPage />} />
        <Route path="/WishList" element={<WishListPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;