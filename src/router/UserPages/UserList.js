import React from 'react'
import UserItem from './UserItem'
export default function UserList(props) {
    return (
        <div>
            <ul>
                {
                    props.search.length>0?
                        props.search.map((user,i)=>{
                                return(<UserItem user={user} key={i} sports = {props.sports}/>)
                            })
                            :
                            <>데이터가 없습니다.</>
                    
                }
            </ul>
        </div>
    )
}
