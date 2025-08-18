import { useState } from "react";
import api from "../api/axios";
import type { LoginResponse } from "../types/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async() => {
        try{
            // 設定登入的api位址
            const res = await api.post<LoginResponse>('/users/login', {
                account,
                password
            });
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('account', res.data.account);
            localStorage.setItem('email', res.data.email);
            if(res.data.refreshToken){
                localStorage.setItem("refresh_token", res.data.refreshToken);
                toast.success("登入成功");
            }
            // navigate('/products');
            navigate('/profile');
        } catch (err) {
            toast.error("帳號/密碼錯誤，請重新確認。");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">登入</h2>
            <div className="mb-4">
            <label className="block mb-1">帳號</label>
            <input
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={account}
                onChange={(e) => setAccount(e.target.value)}
            />
            </div>
            <div className="mb-6">
            <label className="block mb-1">密碼</label>
            <input
                type="password"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <button
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            onClick={handleLogin}
            >
            登入
            </button>
        </div>
        </div>
    );
}











