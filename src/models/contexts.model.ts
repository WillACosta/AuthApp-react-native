import { LoginData } from "./pages.model";

export interface User {
  name: string;
  email: string;
}
export interface AuthContextData {
  signed: boolean;
  user: User | null;
  loading: boolean;
  signIn(payload: LoginData): Promise<void>;
  signOut(): void;
}
