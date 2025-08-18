import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    const [account, setAccount] = useState("");
    const [email, setEmail] = useState("");

    // 讀取 localStorage 中的使用者資料
    useEffect(() => {
        const storedAccount = localStorage.getItem("account") || "";
        const storedEmail = localStorage.getItem("email") || "";
        setAccount(storedAccount);
        setEmail(storedEmail);
    }, []);

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("account");
        localStorage.removeItem("email");
        navigate("/login");
    };

    const gotohome = () => {
        navigate("/")
    };

    return (
        <div className="bg-gray-100 p-4 flex justify-between items-center">
            <div>
                <span 
                    className="font-bold text-xl mr-4"
                    onClick={gotohome}
                >
                    臭屁股的代購網站
                </span>
                {account && (
                <span className="text-sm text-gray-700">
                    使用者：<span className="font-semibold">{account}</span>（{email}）
                </span>
                )}
            </div>

            <button
                onClick={logout}
                className="text-red-500 hover:underline text-sm"
            >
                登出
            </button>
        </div>
    );
}



