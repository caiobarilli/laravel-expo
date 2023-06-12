import axios from "axios";

const API_KEY = " ";

async function authenticate(
  mode: string,
  email: string,
  password: string
): Promise<string> {
  const url = ``;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  const token = response.data.idToken;

  return token;
}

export function createUser(email: string, password: string): Promise<string> {
  return authenticate("signUp", email, password);
}

export function login(email: string, password: string): Promise<string> {
  return authenticate("signInWithPassword", email, password);
}
