import APIKit from "./api";

import { LoginData } from "../models/contexts.model";
import { Response, LoginResponse } from "../models/service.model";

const FAKE_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IndpbGxAbmFuIiwicGFzc3dvcmQiOiJXQUMwMCIsImlhdCI6MTYxNzU3NDY2OCwiZXhwIjoxNjE3NTc4MjY4fQ.y3G2m78gJob2OqD52Cg7r0KpuJvBfLuG37g0p9Fwr1I";

export function fakeSignIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: FAKE_TOKEN,
        user: {
          name: "WIll",
          email: "will@mail.com",
        },
      });
    }, 1000);
  });
}

export function signIn(payload: LoginData): Promise<LoginResponse> {
  return APIKit.post("login", payload);
}
