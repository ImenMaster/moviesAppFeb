import axios from "axios"

export function requestGetMovies(params) {

  return axios.request({
    method: "get",
    url: "https://my-json-server.typicode.com/ImenMaster/demo/movies",
  
  }); 

}