import { defaultClient } from "./client";

export const register = async (credentials) =>
  defaultClient.post("/register", {
    user: {
      email: credentials.email,
      password: credentials.password,
      date_of_birth: "1990-01-01",
    },
  });

export const login = async (credentials) =>
  defaultClient.post("/login", {
    user: {
      email: credentials.email,
      password: credentials.password,
    },
  });

export const getUser = async () => defaultClient.get("/user");
