import {PLAYERS_LIST} from '../_actions/types'

export default function (state={},action){
    switch (action.type) {
        case PLAYERS_LIST:
            return {...state, players:action.payload}
            break;
    
        default:
            return state;
    }
}