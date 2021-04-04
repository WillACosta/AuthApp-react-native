export interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}
export interface LoginResponse {
  data: {
    access_token: string;
  };
}
