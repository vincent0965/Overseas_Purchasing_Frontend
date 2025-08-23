const mockProducts = [
  {
    id: 1,
    name: "Pearl Powder",
    price: 85.0,
    image: "/images/pearl.jpg",
    sale: false,
  },
  {
    id: 2,
    name: "Green Clay",
    price: 85.0,
    image: "/images/green.jpg",
    sale: false,
  },
  {
    id: 3,
    name: "Lavender",
    price: 80.75,
    original: 85.0,
    image: "/images/lavender.jpg",
    sale: true,
  },
  // ...
];

export default function PopularProducts() {
  return (
    <section className="bg-gray-100 py-12">
      <h2 className="text-center text-2xl font-light mb-10">MOST POPULAR</h2>
      <div className="flex overflow-x-auto px-6 gap-6">
        {mockProducts.map((p) => (
          <div key={p.id} className="min-w-[220px] bg-white p-4 shadow">
            <div className="relative">
              {p.sale && (
                <span className="absolute top-2 left-2 bg-olive-800 text-white text-xs px-2 py-1">
                  SALE
                </span>
              )}
              <img src={p.image} alt={p.name} className="w-full h-48 object-contain" />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-sm">{p.name}</h3>
              <p className="text-sm">
                {p.sale ? (
                  <>
                    <span className="line-through text-gray-400 mr-1">${p.original}</span>
                    <span className="text-red-600">${p.price}</span>
                  </>
                ) : (
                  <span>${p.price}</span>
                )}
              </p>
              <button className="mt-2 border border-black px-4 py-1 text-sm">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
