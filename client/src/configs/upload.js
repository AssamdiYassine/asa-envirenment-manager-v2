import axios from 'axios';
import { baseURL } from 'configs/links';
  
export const ADD_DOCUMENT = baseURL+ "/api/identity-environment";
export const UPLOAD_URL = baseURL+ "/api/upload";
 
 
export function addDocument(params) {
  return axios.post(ADD_DOCUMENT, params, { 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
     
    }
  });
}

export function uploadDocument(formData,setProgress) {
  return axios.post(UPLOAD_URL, formData, {
    headers: {
      'Accept': 'application/json',
      "Content-Type": "multipart/form-data" ,
     
    } ,
    onUploadProgress: data => {

      //Set the progress value to show the progress bar

      setProgress(Math.round((100 * data.loaded) / data.total))

    },
  })
}
 
 