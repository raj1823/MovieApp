import {FETCH_DATA_SUCCESS,FETCH_DATA_FAILURE,FETCH_LIVE_DATA_SUCCESS} from '../Data/constant'


const initialState={

    isSuccess: false,
    storedData : [],
    error: null,
    liveData:[]
   

    


}

const data_Reducer=(state=initialState,action={})=>{

    switch(action.type)
    {

        case FETCH_DATA_SUCCESS:
             return { 
                 ...state,
                  isSuccess:true,
                  storedData: action.storedData,
                  
                }
        case FETCH_DATA_FAILURE: 
        return {
            ...state,
             isSuccess:false
            }


            case FETCH_LIVE_DATA_SUCCESS: 
            return {
                ...state,
                 liveData:action.data
                }
       
        default:  return state
    }





}

export default data_Reducer