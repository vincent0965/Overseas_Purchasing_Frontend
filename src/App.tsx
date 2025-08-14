import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import Profile from "./pages/Profile";
import PrivateRoute from "./routers/PrivateRoute";
import Header from "./components/Header";
import type { ReactElement } from "react";

function App() {
  return (
    <>
      <Header />
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
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/products" />} />
      </Routes>
    </>
  );
}

export default App;
