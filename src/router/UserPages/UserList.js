import React,{useState} from 'react'
import UserItem from './UserItem'

export default function UserList() {
    const [users,setUsers] = useState([
        {name:"Son Heung min" , type:"player",revenue:"30",sport:"soccer",describe:"He is soccer player."},
        {name:"Tottenham Hotspur Football Club",type:"team",revenue:"10",sport:"soccer",describe:"It is soccer team."}
    ])

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
