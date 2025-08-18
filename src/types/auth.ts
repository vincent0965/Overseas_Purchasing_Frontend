export interface User {
    id: number;
    account: string;
    email: string;
}

export interface LoginResponse {
    token: string;
    refreshToken?: string;
    account: string;
    email: string;
}


