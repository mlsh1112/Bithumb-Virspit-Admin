import { combineReducers } from "redux";
import user from './user_reducer'
import sports from './sports_reducer'
import players from './players_reducer'
const rootReducer = combineReducers({
    user,
    sports,
    players
})
export default rootReducer