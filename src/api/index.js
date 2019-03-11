import axios from 'axios';
axios.defaults.baseURL='http://47.110.44.100:3332';

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
export let addBook=(data)=>{
    return axios.post('/books',data)
};
export let backupBook=()=>{
    return axios.get('/backup')
};

export let getAll=()=>{
    return axios.all([getSliders(),getHotBooks()]);
};
