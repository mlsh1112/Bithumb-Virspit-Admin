import {
    PLAYERS_LIST
} from './types.js'
import { getplayers } from '../api/API.js'
export function callPlayers(){
    const request = getplayers().then(res=>res.data)
    return {
        type : PLAYERS_LIST,
        payload: request
    }
}