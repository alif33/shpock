import axios from 'axios'

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/'
})

export const getData = endPoint =>api.get(endPoint).then(res => res.data)

export const postData = async (endPoint, formData) => {
    try {
      const { data } = await api.post(endPoint, formData)
        return data
    } catch (error) {
        return error
    }
};








// export const postData = (endPoint, formData) =>api.post(endPoint, formData).then(res => res.data)




// export const getSubCategories = () =>api.get('/subcategories').then(res => res.data)

// export const getData = (endPoint) =>{

// }




// class HttpService
//  {
//     url = "http://localhost:8080/api/";
    
//     postData = async(item ,added_url,tokenId="") =>{
//     const token = await localStorage.getItem(tokenId);
    
//     const requestOptions = this.postRequestOptions(token,item);
    
//     return fetch(this.url+"/"+added_url, requestOptions).then(
//         response=>response.json());
//     }
    
    
//     getData = async(added_url,tokenId="") =>
//     {
//         const token = await localStorage.getItem(tokenId);
//         const requestOptions = this.getRequestOptions(token);
        
//         return fetch(this.url+"/"+added_url, requestOptions).then(
//             response=>response.json());
//     }
    

//     getRequestOptions = (token) =>
//     {
//         let requestOptions = {
//             method:'GET',
//             headers:{
//                 'Authorization':token,
//              'Content-type':'application/json',
//         }
//         }

//         return requestOptions;
//     }


//     postRequestOptions = (token,item) =>
//     {
//         let requestOptions = {
//             method:'POST',
//             headers:{'Authorization':token,
//              'Content-type':'Application/json',
//         },
        
//         body:JSON.stringify(item)
        
//         }

//         return requestOptions;
//     }
    
    
//     }
    
    
//     export default HttpService;
    
    
    
    
    

    
    
    
    