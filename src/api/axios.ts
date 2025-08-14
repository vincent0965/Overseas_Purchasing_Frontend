import axios from "axios";

const api = axios.create({
    // baseURL: "http://localhost:8080/api",
    baseURL:import.meta.env.VITE_API_BASE_URL,
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if(token)
        config.headers.Authorization = `Bearer ${token}`;
    return config;
})

// 401 refresh
let isRefreshing = false;
let queue: Array<() => void> = [];

api.interceptors.response.use(
  (res) => res,
  async (err) => {
    const original = err.config;
    if (err.response?.status === 401 && !original._retry) {
      if (isRefreshing) {
        await new Promise<void>((resolve) => queue.push(resolve));
        original.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
        original._retry = true;
        return api(original);
      }
      try {
        isRefreshing = true;
        original._retry = true;
        const refreshToken = localStorage.getItem("refresh_token");
        if (!refreshToken) throw err;

        const { data } = await axios.post(
          `${import.meta.env.VITE_API_BASE_URL}/auth/refresh`,
          { refreshToken }
        );
        localStorage.setItem("token", data.token);
        // 若後端也回新 refresh_token，也一起更新
        if (data.refreshToken) localStorage.setItem("refresh_token", data.refreshToken);

        queue.forEach((fn) => fn());
        queue = [];
        original.headers.Authorization = `Bearer ${data.token}`;
        return api(original);
      } catch (e) {
        localStorage.removeItem("token");
        localStorage.removeItem("refresh_token");
        window.location.href = "/login";
        return Promise.reject(e);
      } finally {
        isRefreshing = false;
      }
    }
    return Promise.reject(err);
  }
);

export default api;

