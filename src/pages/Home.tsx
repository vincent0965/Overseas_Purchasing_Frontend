// Home.tsx
import HeroSection from "../components/HeroSection";
import FeaturedProduct from "../components/FeaturedProduct";
import PopularProducts from "../components/PopularProducts";

export default function Home() {
  return (
    <>
      <div className="bg-red-500 text-white p-4 text-center">
        測試 Tailwind 成功
      </div>
      <HeroSection />
      <FeaturedProduct />
      <PopularProducts />
    </>
  );
}
