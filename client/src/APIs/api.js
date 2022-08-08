import axios from 'axios';
const url = "/items";
export const getItems = ()=>axios.get(url);
export const createItem = (item)=>axios.post(url,item);