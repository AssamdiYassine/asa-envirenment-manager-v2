 
import axios from "axios";

import { baseURL } from "configs/links";

//Auth
export const LOGIN_URL = baseURL + "/api/auth/SignIn";
// export const REGISTER_URL = baseURL + "/api/auth/SignUp";
export const AUTH_AUTHORIZED = baseURL + '/api/user/authorized';
export const ROLE_URL = baseURL + "/api/user/access";
// export const CHECK_USER_URL = baseURL + "/api/user/checkuser/";

// Auth Funcs
export function LoginFunc(value) {
  return axios.post(LOGIN_URL, value);
}

// export function RegisterFunc(
//   lastname,
//   firstname,
//   email,
//   password
// ) {
//   return axios.post(REGISTER_URL, {
//     lastname,
//     firstname,

//     email,

//     password
//   });
// }

export function AutorizedFunc(param) {
  return axios.post(AUTH_AUTHORIZED,{param}, { 
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
  });
}

export function getRole() {
  return axios.get(ROLE_URL, { 
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
  });
}
 

 