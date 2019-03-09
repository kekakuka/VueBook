import axios from 'axios';
axios.defaults.baseURL='http://localhost:3332';

export let getSliders=()=>{
   return axios.get('/sliders');
};
export let getHotBooks=()=>{
  return axios.get('/hot')
};
export let getBooks=()=>{
    return axios.get('/books')
};
export let removeBook=(id)=>{
    return axios.delete(`/books?id=${id}`)
};
export let getTheBook=(id)=>{
    return axios.get(`/details?id=${id}`)
};
export let changeTheBook=(id,data)=>{
    return axios.put(`/books?id=${id}`,data)
};
