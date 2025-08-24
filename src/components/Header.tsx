import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CategoryMenu from "./CategoryMenu";

export default function Header() {
  
  const navigate = useNavigate();
  const [account, setAccount] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const acc = localStorage.getItem('account');
    const em = localStorage.getItem('email');
    if(token && acc){
      setAccount(acc);
      setEmail(em);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('account');
    localStorage.removeItem('email');
    setAccount(null);
    navigate("/login");
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow tabindex=-1">
      {/* 導覽列 */}
      <div className="flex justify-between items-center px-8 py-4">
        {/* 清單 */}
        <div className="flex-1">
          <CategoryMenu />
        </div>

        {/* 商標 */}
        <div className="flex-1 flex justify-center">
          <span className="text-2xl font-semibold border px-4 py-1">
            <button onClick={()=> navigate("/")}>臭屁股日本代購網站</button>
          </span>
        </div>

        <div className="flex-1 flex justify-end items-center gap-6">
          {/* 搜尋欄 */}
          <input
            // disabled
            placeholder="SEARCH ..."
            className="border-b border-gray-400 px-2 py-1 w-24 outline-none text-sm placeholder-gray-500 bg-transparent"
          />

          {/* user profile */}
          {account ? (
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-600">{account}</span>
              <button
                onClick={() => navigate("/profile")}
                className="hover:text-blue-600 underline"
              >
                個人資料
              </button>
              <button
                onClick={logout}
                className="text-red-500 hover:underline"
              >
                登出
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-sm">
              <button
                onClick={() => navigate("/login")}
                className="hover:text-blue-600"
              >
                登入
              </button>
              <button
                onClick={() => navigate("/register")}
                className="hover:text-blue-600"
              >
                註冊
              </button>
            </div>
          )}

          <button disabled className="text-xl text-gray-400">
            🛒
          </button>

        </div>
      </div>
    </header>
  );
}
