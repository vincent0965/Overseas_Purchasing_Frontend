export interface UserProfile{
    id: number;
    firstname: string;
    lastname: string;
    account: string;
    phone: string;
    email: string;
    city?: string;
}

export interface RegisterData {
  firstname: string;
  lastname: string;
  account: string;
  password: string;
  phone: string;
  email: string;
  city?: string;
}