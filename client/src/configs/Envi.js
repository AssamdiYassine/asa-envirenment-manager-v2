//Requires
import axios from 'axios';

import { baseURL } from 'configs/links';

//Envi
export const ENVI_URL = baseURL + '/api/environment';
export const ENVI_DEVE_URL = baseURL + '/api/developement';
export const ENVI_TEST_URL = baseURL + '/api/test';
export const ENVI_PERFORMANCE_URL = baseURL + '/api/performance';
export const ENVI_DEVEINFO_URL = baseURL + '/api/deveInfo';
export const ENVI_DEMO_URL = baseURL + '/api/demo';

//DELETE LINK
export const DELETE_DEMO_URL = baseURL + '/api/delete_demo';
export const DELETE_DEVE_URL = baseURL + '/api/delete_deve';
export const DELETE_TEST_URL = baseURL + '/api/delete_test';
export const DELETE_PERF_URL = baseURL + '/api/delete_perf';

 //ADD LINK 

export const ADD_PERF_URL = baseURL + '/api/add_perf';
export const ADD_DEVE_URL = baseURL + '/api/add_deve';
export const ADD_TEST_URL = baseURL + '/api/add_test';
 
//EDIT LINK 
export const EDIT_DOCUMENT = baseURL + '/api/edit_demo';

//Auth Funcs
export function EnviFunc() {
	return axios.get(ENVI_URL, { 
		headers: {
		  'Accept': 'application/json',
		  'Content-Type': 'application/json'
		  
		}
	  });
}
export function DeveFunc(id) {
	return axios.get(ENVI_DEVE_URL + `/${id}`, { 
		headers: {
		  'Accept': 'application/json',
		  'Content-Type': 'application/json'
		  
		}
	  });
}
export function TestFunc(id) {
	return axios.get(ENVI_TEST_URL + `/${id}`, { 
		headers: {
		  'Accept': 'application/json',
		  'Content-Type': 'application/json'
		  
		}
	  });
}
export function PerFunc(id) {
	return axios.get(ENVI_PERFORMANCE_URL + `/${id}`, { 
		headers: {
		  'Accept': 'application/json',
		  'Content-Type': 'application/json'
		  
		}
	  });
}
export function getDeveInfo(id) {
	return axios.get(ENVI_DEVEINFO_URL + `/${id}`, { 
		headers: {
		  'Accept': 'application/json',
		  'Content-Type': 'application/json'
	 
		}
	  });
}
export function getdemo(id) {
	return axios.get(ENVI_DEMO_URL  + `/${id}`, { 
		headers: {
		  'Accept': 'application/json',
		  'Content-Type': 'application/json'
		  
		}
	  });
}
 
// delete 
export function deleteDemo(param) {
	return axios.post(DELETE_DEMO_URL ,{param}, { 
		headers: {
		  'Accept': 'application/json',
		  'Content-Type': 'application/json'
		  
		}
	  });
}
export function deleteDeve(param) {
	return axios.post(DELETE_DEMO_URL ,{param}, { 
		headers: {
		  'Accept': 'application/json',
		  'Content-Type': 'application/json'
		  
		}
	  });
}
export function deleteTest(param) {
	return axios.post(DELETE_DEMO_URL ,{param}, { 
		headers: {
		  'Accept': 'application/json',
		  'Content-Type': 'application/json'
		  
		}
	  });
}
export function deletePerf(param) {
	return axios.post(DELETE_DEMO_URL ,{param}, { 
		headers: {
		  'Accept': 'application/json',
		  'Content-Type': 'application/json'
		  
		}
	  });
}
 

// add 
export function addDeve(params) {
	return axios.post(ADD_DEVE_URL , params, { 
	  headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	   
	  }
	});
  }

  export function addTest(params) {
	return axios.post(ADD_TEST_URL, params, { 
	  headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	   
	  }
	});
  }

  export function addPerf(params) {
	return axios.post(ADD_PERF_URL, params, { 
	  headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	   
	  }
	});
  }

  //edit

  export function editDemo(params) {
	return axios.post(EDIT_DOCUMENT, params, { 
	  headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	  }
	});
  }