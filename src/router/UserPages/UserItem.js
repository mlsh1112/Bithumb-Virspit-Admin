import React from 'react'
import Button from '@material-ui/core/Button'
import { mainColor } from '../../assets/colors'

export default function UserItem(props) {
    const user = props.user
    const handleDelete = () =>{

    }
    const labelstyle = {
        fontWeight:"bold",
        backgroundColor:mainColor,
        color:"white",
        padding:"3px", 
        borderRadius:"30px",
        fontSize:"5px",
        marginLeft:"13px"
    }

    const userTypeLable = (
        <div style={labelstyle}>
                {user.type==='player'?<>Player</>:<>Team</>}
        </div>
    ) 
    

    return (
        <li style={{fontWeight:"bold"}}>
            <div style={{flex:"inline-block",margin:"30px"}}>
                <div style={{display:"flex"}}>
                    {user.name}
                    {userTypeLable}
                </div>
                <div style={{float: "right"}}>
                    <Button color="primary" > Edit </Button>
                    <Button color="secondary" onClick={handleDelete}>Delete</Button>
                </div>
            </div>
        </li>
    )
}

