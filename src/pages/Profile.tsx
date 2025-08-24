import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserProfile, updateUserProfile } from "../api/userapi";
import type { UserProfile } from "../types/user";
import { toast } from "react-toastify";

export default function Profile() {
    const navigate = useNavigate();
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

    // 之後後端要新增取個人資料的api
    const test_account = localStorage.getItem('account');
    const test_email = localStorage.getItem('email');

    if (loading) return <p className="text-center mt-10 text-gray-500">載入中...</p>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center text-blue-600">個人資料</h2>
        <div className="grid grid-cols-2 gap-4 text-gray-700 text-base">
            <span className="font-medium">帳號</span>
            {/* <p>{profile.account}</p> */}
            <p>{test_account}</p>

            <span className="font-medium">電子郵件</span>
            {/* <p>{profile.email}</p> */}
            <p>{test_email}</p>

            <span className="font-medium">電話</span>
            <p>{profile.phone || "未填寫"}</p>

            <span className="font-medium">縣市</span>
            <p>{profile.city || "未填寫"}</p>
        </div>
        <button
            onClick={() => navigate("/edit-profile", { state: { fromProfile: true } })}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition mt-6"
        >
            編輯個人資料
        </button> 
      </div>
    </div>
  );
}



