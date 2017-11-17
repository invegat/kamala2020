import axios from 'axios';
import {GET_USER, GET_USERS} from './index'


export const getUsers = () => {
    const promise = axios.get('http://localhost:5001/users'); 
  return {
    type: GET_USERS,
    payload: promise
  };
};
export const getUser = (name) => {
   console.log('getLibrary name:', name)
    const promise = axios.get('http://localhost:5000/user/'+name.substring(1))
    return {
        type: GET_USER,
        payload: promise
      };
};
