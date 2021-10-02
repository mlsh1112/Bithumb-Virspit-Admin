import axios from 'axios'
import baseurl from '../config'


const PRODUCT_PORT = baseurl.product_port


let headers = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: '',
    },
};


export const getproducts = () => axios.get(PRODUCT_PORT+'/product')
export const searchproduct = () => axios.get()

export const getplayers = () => axios.get(PRODUCT_PORT+'/team-player')
export const getplayer = (id) => axios.get(PRODUCT_PORT+'/team-player/'+id)