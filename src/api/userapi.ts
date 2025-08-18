import type { UserProfile, RegisterData } from "../types/user";
import api from "./axios";

export const getUserProfile = async () => {
    return api.get('/users/profile');
};

export const updateUserProfile = async (data: Partial<UserProfile>) => {
    return api.put('/users/profile', data)
};

export const registerUser = async (data: Partial<RegisterData>) => {
    return api.post('/users/register', data)
}