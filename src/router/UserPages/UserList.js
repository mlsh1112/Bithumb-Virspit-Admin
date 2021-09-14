import React,{useState} from 'react'
import UserItem from './UserItem'

export default function UserList() {
    const [users,setUser] = useState([
        {name:"Son Heung min" , type:"player" },
        {name:"Tottenham Hotspur Football Club",type:"team"}
    ])

    return (
        <ul>
            {
                users.map((user,i)=>{
                    return(<UserItem user={user} key={i}/>)
                })
            }
        </ul>
    )
}
