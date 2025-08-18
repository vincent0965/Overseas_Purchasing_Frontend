import { Link } from "react-router-dom";

export default function Home() {
    const account = localStorage.getItem("account");

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md text-center">
            <h1 className="text-2xl font-bold mb-6">歡迎來到購物平台</h1>
            {account ? (
            <p className="text-lg">目前登入帳號：<strong>{account}</strong></p>
            ) : (
            <div className="space-x-4">
                <Link to="/login" className="text-blue-600 hover:underline">登入</Link>
                <Link to="/register" className="text-blue-600 hover:underline">註冊</Link>
            </div>
            )}
        </div>
        </div> 
    );
}




