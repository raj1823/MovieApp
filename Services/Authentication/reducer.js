import {
    AUTHENTICATION_FAILURE,
    AUTHENTICATION_SUCCESS,
   
  } from './constants';

  const initialState = {
    success: false,
    
  
   
  
  
  };

  const authenticate_Reducer = (state = initialState, action) => {
    switch (action.type) {
      case AUTHENTICATION_SUCCESS:
        return {
          ...state,
  
          success: true,
  
        };
      case AUTHENTICATION_FAILURE:
        return {
          ...state,
  
          success: false,
          
        };
        default:
            return state;
        }
      };
      
      export default authenticate_Reducer;
      

