import {
  USERDATA,
} from '../constants';
 
 
const INIT_STATE = {
 
 
  user: null,
 
  loading: true
};

const userReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
      case USERDATA:
          return { ...state, ...action.payload };
      default: return { ...state };
  }
};

export default userReducer;

