
//Requires
import axios from "axios";

import { baseURL } from "configs/links";

//Auth
export const ADDPLATFORME = baseURL + "/api/platforme/Add";
export const PLATFORME = baseURL + "/api/platforme/";
export const DELETEPLATFORME = baseURL + "/api/platforme/delete/";
 

 
export function Platforme(id) {
  return axios.get(PLATFORME + `${id}`, { 
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'}
  });
}

export function addPlatforme(PARAM) {
  return axios.post(ADDPLATFORME,{PARAM}, { 
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'}
  });
}
export function deletePlatforme(PARAM) {
  return axios.post(DELETEPLATFORME,{PARAM}, { 
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'}
  });
}



 