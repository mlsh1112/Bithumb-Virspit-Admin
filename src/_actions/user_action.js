import axios from 'axios'
import {
    LOGIN_USER
} from './types'
export function loginUser(dataTosubmit) {
    // const request = axios.post('',dataTosubmit)
    //                 .then(response=>response.data)

    const test = {
        type:"admin",
        userID:"seohyun"
    }
    
    return {
        type : LOGIN_USER,
        //payload: request
        payload : test
    }
}