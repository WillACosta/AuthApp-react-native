export interface User {
  name: string;
  email: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface AuthContextData {
  signed: boolean;
  user: User | null;
  loading: boolean;
  signIn(payload: LoginData): Promise<void>;
  signOut(): void;
}
