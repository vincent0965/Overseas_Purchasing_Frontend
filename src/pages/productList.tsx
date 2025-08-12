import { useEffect, useState } from "react";
import api from "../api/axios";
import type { Product } from "../types/product";

export default function ProductList() {
  const [items, setItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get<Product[]>("/products")
       .then(res => setItems(res.data))
       .catch(err => console.error(err))
       .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="p-6">載入中...</div>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
      {items.map(p => (
        <div key={p.id} className="border rounded p-3">
          <img src={p.imageUrl} alt={p.name} className="w-full h-40 object-cover mb-2" />
          <div className="font-semibold">{p.name}</div>
          <div className="text-sm opacity-70">NT$ {p.price}</div>
          <button className="mt-2 w-full border rounded py-1 hover:bg-gray-50">加入購物車</button>
        </div>
      ))}
    </div>
  );
}
