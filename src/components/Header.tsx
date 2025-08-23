import { Link, useNavigate } from "react-router-dom";
import CategoryMenu from "./CategoryMenu";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow">
      {/* 導覽列 */}
      <div className="flex justify-between items-center px-8 py-4">
        {/* 清單 */}
        <div className="flex-1">
          <CategoryMenu />
        </div>

        {/* 商標 */}
        <div className="flex-1 flex justify-center">
          <span className="text-2xl font-semibold border px-4 py-1">FRAIS123</span>
        </div>

        <div className="flex-1 flex justify-end items-center gap-6">
          {/* 搜尋欄 */}
          <input
            disabled
            placeholder="SEARCH ..."
            className="border-b border-gray-400 px-2 py-1 w-24 outline-none text-sm placeholder-gray-500 bg-transparent"
          />

          <button
            onClick={() => navigate("/login")}
            className="text-sm hover:text-olive-700"
          >
            Log In
          </button>

          <button disabled className="text-xl text-gray-400">
            🛒
          </button>

        </div>
      </div>
    </header>
  );
}
