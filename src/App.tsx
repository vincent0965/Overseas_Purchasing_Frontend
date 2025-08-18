import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import PrivateRoute from "./routers/PrivateRoute";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Header from "./components/Header";

function App() {
  return (
      <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
