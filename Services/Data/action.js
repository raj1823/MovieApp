import {FETCH_DATA_SUCCESS,FETCH_DATA_FAILURE, FETCH_LIVE_DATA_SUCCESS} from '../Data/constant'



export function isDataSuccess(data)
{
    return {
        type: FETCH_DATA_SUCCESS,
        storedData :  data,
        
        
    }
}


export function isDataFailure(error)
{

    return {
        type: FETCH_DATA_FAILURE,
        
        error:error

    }
}
export function isLiveDataSuccess(liveData)
{

    return {
        type: FETCH_LIVE_DATA_SUCCESS,
        
       data: liveData

    }
}