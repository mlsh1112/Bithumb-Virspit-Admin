import {SPORTS_LIST,SPORT} from '../_actions/types'

export default function (state={},action){
    switch (action.type) {
        case SPORTS_LIST:
            return {...state, sports:action.payload}
            break;
    
        case SPORT:
            return {...state, sports:action.payload}
            break;
        
        default:
            return state;
    }
}