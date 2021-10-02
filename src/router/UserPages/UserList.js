import React,{useState} from 'react'
import UserItem from './UserItem'

import {useDispatch} from 'react-redux'
import { callPlayers } from '../../_actions/players_action';
export default function UserList() {
    const [users,setUsers] = useState([])

    const dispatch = useDispatch()
    dispatch(callPlayers).payload.then(res=>setUsers(res.data))

    return (
        <div>
            <ul>
                {
                    users.map((user,i)=>{
                        return(<UserItem user={user} key={i}/>)
                    })
                }
            </ul>
        </div>
    )
}
