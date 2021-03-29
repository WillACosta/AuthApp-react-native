interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: "asdasdqwe12312eswdae213fq",
        user: {
          name: "WIll",
          email: "will@mail.com",
        },
      });
    }, 1000);
  });
}
