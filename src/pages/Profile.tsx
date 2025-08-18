import { useEffect, useState } from "react";
import { getUserProfile, updateUserProfile } from "../api/userapi";
import type { UserProfile } from "../types/user";
import { toast } from "react-toastify";

export default function Profile() {
    const [profile, setProfile] = useState<UserProfile>({
        id: 0,
        firstname:"",
        lastname:"",
        account:"",
        phone:"",
        email:"",
        city:""
    });

    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        (
            async() => {
                try{
                    const res = await getUserProfile();
                    setProfile(res.data);
                } catch (e) {
                    toast.error("無法載入使用者資料");
                } finally {
                    setLoading(false);
                }
            })();
    },[]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProfile({
        ...profile,
        [e.target.name]: e.target.value,
        });
    };

    const handleSave = async () => {
        try {
            await updateUserProfile(profile);
            toast.success("儲存成功");
        } catch (e) {
            toast.error("儲存失敗");
        }
    };

    

    if (loading) return <p className="text-center mt-10 text-gray-500">載入中...</p>;

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
            <h2 className="text-2xl font-semibold mb-6 text-center text-blue-600">個人資料</h2>
            <form className="space-y-5">
            <div>
                <label className="block mb-1 text-gray-700">使用者名稱</label>
                {/* <input
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                name="name"
                value={profile.account}
                onChange={handleChange}
                required
                /> */}
            </div>
            <div>
                <label className="block mb-1 text-gray-700">電話</label>
                {/* <input
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                required
                /> */}
            </div>
            <div>
                <label className="block mb-1 text-gray-700">信箱</label>
                {/* <input
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                name="email"
                value={profile.email}
                onChange={handleChange}
                required
                /> */}
            </div>
            <div>
                <label className="block mb-1 text-gray-700">居住縣市（選填）</label>
                {/* <input
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                name="city"
                value={profile.city || ""}
                onChange={handleChange}
                /> */}
            </div>
            <button
                type="button"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                onClick={handleSave}
            >
                儲存
            </button>
            </form>
        </div>
        </div>
    );



}



