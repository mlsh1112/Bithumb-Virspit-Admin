import axios from 'axios'
import {baseurl,adminToken} from '../config'


const PORT = baseurl.port


const headers = {
    headers: {
      Authorization: adminToken,
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    }
}

const API = axios.create(headers);

export const getproducts = () => API.get(PORT+'/products')
export const getproductsByPage = ({page,size}) => API.get(PORT+`/products?page=${page}&size=${size}`)
export const getproductById = (id) => API.get(PORT+`/products/${id}`)
export const getproductSearch = ({sportsId,teamPlayerId,title}) => API.get(PORT+`/products?title=${title}&sportsId=${sportsId}&teamPlayerId=${teamPlayerId}`)
export const uploadproducts = (param) => API.post(PORT+'/products',param)
export const editproducts = (id,param) => API.put(PORT+`/products/${id}`,param)

export const getplayers = () => API.get(PORT+`/team-players`)
export const getplayersBypage = ({page,size}) => API.get(PORT+`/team-players?page=${page}&size=${size}`)
export const getplayersBysportID = (sportsId) => API.get(PORT+`/team-players?sportsId=${sportsId}`)
export const getplayersByname = (name) => API.get(PORT+`/team-players?name=${name}`)
export const getplayerSearch = ({sportsId,name}) => API.get(PORT+`/team-players?name=${name}&sportsId=${sportsId}`)
export const getplayer = (id) => API.get(PORT+`/team-players/${id}`)
export const updateplayer = ({ name, description, type, revenueShareRate, sportsId }) => API.post(PORT+'/team-players',{ name, description, type, revenueShareRate, sportsId })
export const editplayer = ({id, name, description, type, revenueShareRate, sportsId }) => API.put(PORT+`/team-players/${id}`,{ name, description, type, revenueShareRate, sportsId })
export const deleteplayer = (id) => API.delete(PORT+`/team-players/${id}`)


export const getsports = () => API.get(PORT+'/sports')
export const getsport = (id) => API.get(PORT+`/sports/${id}`)
export const getsportByPage = ({page,size}) => API.get(PORT+`/sports?page=${page}&size=${size}`)
export const getsportByname = (name) => API.get(PORT+`/sports?name=${name}`)
export const editsport = (id,param) => API.put(PORT+`/sports/${id}`,param)
export const updatesport = (param) => API.post(PORT+'/sports',param)
export const deletesport = (id) => API.delete(PORT+`/sports/${id}`)

export const authcheck = () => API.get(PORT+'/auth/check')

export const getorder = () => API.get(PORT+'/orders')
export const getorderByPage = ({page,size}) => API.get(PORT+`/orders?page=${page}&size=${size}`)
export const editordermemo = ({memo,orderId}) => API.put(PORT+'/orders/memo',{memo,orderId})
export const getorderByDate=({startDate,endDate}) => API.get(PORT+`/orders?startDate=${startDate}&endDate=${endDate}`)


export const getads = () => API.get(PORT+'/advertisements?page=1&size=100')
export const getadsID = (id) => API.get(PORT+`/advertisements/${id}`)
export const addads = (description, productId, url) => API.post(PORT+'/advertisements', {description, productId, url})
export const editads = (id, description, url) => API.put(PORT+`/advertisements/${id}`, {description, url})
export const deleteads = (id) => API.delete(PORT+`/advertisements/${id}`)

