


import {
    AUTHENTICATION_FAILURE,
    AUTHENTICATION_SUCCESS,
   
  } from './constants';


export const isUserAuthenticated = (realm, username, password) => dispatch => {

    return new Promise(function(resolve, reject) {
    if (realm[0].username === username && realm[0].password === password) {
      dispatch({
        type: AUTHENTICATION_SUCCESS,
      });
      resolve("Success")
    } else {
      dispatch({
        type: AUTHENTICATION_FAILURE,
      });
      reject("Fail")
    }
    })
  };