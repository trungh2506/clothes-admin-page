import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import ProductPage from "./pages/ProductPage";
import Layout from "./components/Layout/Layout";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";
import ProfilePage from "./pages/ProfilePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DashboardPage />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="user" element={<UserPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
        <Route path="login" element={<LoginPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
