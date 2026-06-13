export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;

  user: {
    id: number;
    name: string;
    email: string;
  };
}