import {
  USERDATA,
} from '../constants';


export const pushUserData = (data) => ({
  type: USERDATA,
  payload: data
});
