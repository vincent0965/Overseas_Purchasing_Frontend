import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import PrivateRoute from "./routers/PrivateRoute";
import EditProfile from "./pages/Edit_Profile";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
      <div className="font-sans">
        <Header />

        <main className="pt-32">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route
              path="/edit-profile"
              element={
                <PrivateRoute>
                  <EditProfile />
                </PrivateRoute>
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>
  );
}

export default App;
