export interface RegisterRequest {
  name: string;
  email: string;
  mobile: string;
  password: string;
  confirmPassword: string;
}

export interface RegisterResponse {
  success: boolean;
  message: string;
}