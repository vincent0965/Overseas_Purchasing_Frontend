export default function Profile() {
    const username = localStorage.getItem("username");

    return (
        <div className="p-8">
            <h1 className="text-xl font-bold mb-4">使用者資訊</h1>
            <p>使用者帳號：{username || "未登入"}</p>
        </div>
    )
}