import axios from "axios";
import Constants from "expo-constants";

async function authenticate(
  mode: string,
  email: string,
  password: string
): Promise<string> {
  const response = await axios.post(
    Constants.expoConfig?.extra?.apiUrl + "auth/login",
    {
      email: email,
      password: password,
    }
  );

  return response.data.access_token;
}

export function createUser(email: string, password: string): Promise<string> {
  return authenticate("signUp", email, password);
}

export function login(email: string, password: string): Promise<string> {
  return authenticate("signInWithPassword", email, password);
}
