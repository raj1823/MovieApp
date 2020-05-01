import {API_LINK} from './constant'

import {isDataFailure,isDataSuccess,isLiveDataSuccess} from './action'







export function dataFetch(){
  console.log("inside dataFetch")

    
           return dispatch=>{

                console.log("fetch Data called")

               
                fetch(API_LINK,
                    {
                      method: 'GET',
                 
                    },
                  )
                    .then((response) => {
                        
                      if (response.status >= 200 && response.status < 300) {
                        
                        //this.props.navigation.navigate("List")
                         
                         
                        return response.json()

                      }
                      else {console.log("hcadc: ",response.status)
                    
                          reject("ServerIssue")
                    
                    }

                    }).then(data => { 
                      // var moviesData=[]; 
                      // moviesData.push( {...data.results})
                      var moviesData= data.results.map(item=> item)
                        console.log("data :",moviesData)
                        dispatch(isDataSuccess(moviesData))
                    })
                    
                    .catch((error) => {
                      console.log("Data Error");
                      dispatch(isDataFailure(error))
                       
                    });
            
    
}
}

export function fetchLiveChannels(){
  console.log("inside dataFetch")

    
           return dispatch=>{

                console.log("fetch Data called")

               
                fetch("https://api.jsonbin.io/b/5eabf56507d49135ba48b8d1/2",
                    {
                      method: 'GET',
                 
                    },
                  )
                    .then((response) => {
                        
                      if (response.status >= 200 && response.status < 300) {
                        
                        //this.props.navigation.navigate("List")
                         
                         
                        return response.json()

                      }
                      else {console.log("hcadc: ",response.status)
                    
                          reject("ServerIssue")
                    
                    }

                    }).then(data => { 
                      // var moviesData=[]; 
                      // moviesData.push( {...data.results})
                     
                        console.log("data :",data)
                        dispatch(isLiveDataSuccess(data))
                    })
                    
                    .catch((error) => {
                      console.log("Data Error");
                      dispatch(isDataFailure(error))
                       
                    });
            
    
}
}





