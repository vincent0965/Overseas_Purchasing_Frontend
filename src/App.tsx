import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import ProductList from "./pages/productList";
import type { ReactElement } from "react";

const PrivateRoute = ({ children }: { children: ReactElement }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" replace />;
};

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/products"
        element={
          <PrivateRoute>
            <ProductList />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Navigate to="/products" />} />
    </Routes>
  );
}
