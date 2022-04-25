import { defaultClient } from "./client";

type Credentials = {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  date_of_birth: string;
};

export const register = async (credentials: Credentials) =>
  defaultClient.post("/register", {
    user: {
      email: credentials.email,
      password: credentials.password,
      date_of_birth: "1990-01-01",
      first_name:'',
      last_name: ''
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
