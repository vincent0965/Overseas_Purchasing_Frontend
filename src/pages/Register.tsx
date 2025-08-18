import { useState } from "react";
import { registerUser } from "../api/userapi";
import type { RegisterData } from "../types/user";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Register() {

    const navigate = useNavigate();

    const [ formData, setFormData ] = useState<RegisterData>(
        {
            firstname: "",
            lastname: "",
            account: "",
            password: "",
            phone: "",
            email: "",
            city: "",
        });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async () => {
        try {
            await registerUser(formData);
            toast.success("註冊成功");
            navigate("/login");
        } catch {
            toast.error("註冊失敗");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">註冊帳號</h2>
            <div className="space-y-4">
            <div>
                <label className="block mb-1 text-gray-700">帳號</label>
                <input
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
                type="text"
                name="account"
                value={formData.account}
                onChange={handleChange}
                required
                />
            </div>
            <div>
                <label className="block mb-1 text-gray-700">信箱</label>
                <input
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                />
            </div>
            <div>
                <label className="block mb-1 text-gray-700">密碼</label>
                <input
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                />
            </div>
            <button
                onClick={handleSubmit}
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            >
                註冊
            </button>
            </div>
        </div>
        </div>
    );
}







