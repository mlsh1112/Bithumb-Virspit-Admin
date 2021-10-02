import {
    SPORTS_LIST
} from './types.js'
import { getsports } from '../api/API.js'
export function callSports(){
    const request =getsports().then(res=>res.data)

    return {
        type : SPORTS_LIST,
        payload: request
    }
}