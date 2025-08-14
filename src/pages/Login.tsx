import { useState } from "react";
import api from "../api/axios";
import type { LoginResponse } from "../types/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async() => {
        try{
            // 設定登入的api位址
            const res = await api.post<LoginResponse>('/users/login', {
                username,
                password
            });
            localStorage.setItem('token', res.data.token);
            if(res.data.refreshToken){
                localStorage.setItem("refresh_token", res.data.refreshToken);
            }
            navigate('/products');
        } catch (err) {
            alert("login fail");
        }
    };

    return (
        <div className="flex flex-col items-center mt-20">
            <h1 className="text-2xl font-bold mb-4">登入</h1>
            <input
                className="border p-2 mb-2 w-64"
                placeholder="帳號"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                className="border p-2 mb-4 w-64"
                placeholder="密碼"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                onClick={handleLogin}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
            登入
            </button>
        </div>
    );
}











