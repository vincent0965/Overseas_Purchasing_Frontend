export interface User {
    id: number;
    username: string;
    email?: string;
}

export interface LoginResponse {
    token: string;
    refreshToken?: string;
    user?: User;
}


