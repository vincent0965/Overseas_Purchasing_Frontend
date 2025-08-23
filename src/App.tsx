import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import PrivateRoute from "./routers/PrivateRoute";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturedProduct from "./components/FeaturedProduct";
import PopularProducts from "./components/PopularProducts";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      {/* Sticky Header */}
      <Header />

      {/* 主畫面內容：加 padding-top 避免被 Header 遮住 */}
      <main className="pt-36">
        <HeroSection />
        <FeaturedProduct />
        <PopularProducts />
      </main>

      {/* 頁尾 */}
      <Footer />
    </div>
  );
}

export default App;
