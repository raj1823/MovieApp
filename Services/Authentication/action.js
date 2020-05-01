


import {
    AUTHENTICATION_FAILURE,
    AUTHENTICATION_SUCCESS,
   
  } from './constants';


export const toggleLogin = (realm, username, password) => dispatch => {
    if (realm[0].username === username && realm[0].password === password) {
      dispatch({
        type: AUTHENTICATION_SUCCESS,
      });
    } else {
      dispatch({
        type: AUTHENTICATION_FAILURE,
      });
    }
  };