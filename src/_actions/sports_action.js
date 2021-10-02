import {
    SPORTS_LIST,
    SPORT
} from './types.js'
import { getsports,getsport } from '../api/API.js'
export function callSports(){
    const request =getsports().then(res=>res.data)

    return {
        type : SPORTS_LIST,
        payload: request
    }
}

export function callSport(id){
    const request = getsport(id).then(res=>res.data)

    return {
        type: SPORT,
        payload:request
    }
}