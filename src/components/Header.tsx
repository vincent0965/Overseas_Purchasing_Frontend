import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        navigate("/login");
    };

    return (
        <div className="bg-gray-100 p-4 flex justify-between">
            <span className="font-bold">我的網站</span>
            <button onClick={logout} className="text-red-500">
            登出
            </button>
        </div>
    );
}



