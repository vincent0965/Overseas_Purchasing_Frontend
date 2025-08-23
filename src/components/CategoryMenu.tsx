import { Link } from "react-router-dom";

const categories = ["Shop", "About", "Blog", "Bundles", "Contact"];

export default function CategoryMenu() {
  return (
    <nav className="flex space-x-6 text-sm font-medium text-gray-800">
      {categories.map((cat) => (
        <Link
          key={cat}
          to={`/category/${cat.toLowerCase()}`}
          className="hover:text-olive-700"
        >
          {cat.toUpperCase()}
        </Link>
      ))}
    </nav>
  );
}
