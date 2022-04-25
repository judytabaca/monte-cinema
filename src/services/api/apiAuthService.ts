import { defaultClient } from "./client";

type Credentials = {
  email: string;
  password: string;
};

export const register = async (credentials: Credentials) =>
  defaultClient.post("/register", {
    user: {
      email: credentials.email,
      password: credentials.password,
      date_of_birth: "1990-01-01",
    },
  });

export const login = async (credentials: Credentials) =>
  defaultClient.post("/login", {
    user: {
      email: credentials.email,
      password: credentials.password,
    },
  });

export const logout = async () => defaultClient.delete("/logout");

export const getUser = async () => defaultClient.get("/user");
