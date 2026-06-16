export interface RegisterRequest {
  name: string;
  email: string;
  mobile: string;
  password: string;
  
}

export interface RegisterResponse {
  success: boolean;
  message: string;
}