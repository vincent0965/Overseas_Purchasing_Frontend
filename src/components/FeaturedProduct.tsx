export default function FeaturedProducts() {
  return (
    <section className="flex flex-col items-center text-center px-4 py-12">
      <h2 className="text-2xl font-light mb-10">SHOP OUR FAVORITES</h2>
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">
        {/* 左側：文字區塊 */}
        <div className="max-w-md text-left">
          <h3 className="text-xl font-semibold mb-4">NATURE’S ESSENCE SCENTED CANDLES</h3>
          <p className="text-sm text-gray-600 mb-4">
            I'm a paragraph. Click here to add your own text and edit me...
          </p>
          <button className="border border-black px-4 py-2 text-sm">Shop Candles</button>
        </div>

        {/* 右側：圖片 */}
        <img
          src="/images/candle.jpg"
          alt="Candle"
          className="max-w-sm rounded shadow"
        />
      </div>
    </section>
  );
}