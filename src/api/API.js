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
export const getplayer = (id) => axios.get(PRODUCT_PORT+`/team-player/${id}`)

export const getsports = () => axios.get(PRODUCT_PORT+'/sports')
export const getsport = (id) => axios.get(PRODUCT_PORT+`/sports/${id}`)
export const editsport = (id,param) => axios.put(PRODUCT_PORT+`/sports/${id}`,param)
export const updatesport = (param) => axios.post(PRODUCT_PORT+'/sports',param)
export const deletesport = (id) => axios.delete(PRODUCT_PORT+`/sports/${id}`)