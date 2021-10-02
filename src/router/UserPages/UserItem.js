import React,{useState, useEffect} from 'react'
import Button from '@material-ui/core/Button'
import { mainColor } from '../../assets/colors'
import UserModal from './UserModal'

import {useDispatch} from 'react-redux'
import {callSport} from '../../_actions/sports_action'

export default function UserItem(props) {
    const [user,setUser] = useState(props.user)
    const [open,setOpen] = useState(false)
    const [sport,setSport] = useState("") 
    const dispatch = useDispatch()
    
    useEffect(()=>{
        //dispatch(callSport).payload.then(res=>setSport(res.data))
    },[])
    
    const handleRadioChange = (e) => {
        e.preventDefault()
        setUser({
            ...user,
            type:e.target.value
        })
    };
    const handleDelete = () =>{

    }
    const handleOpen = () =>{
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleEdit=(e)=>{
        e.preventDefault()
        console.log(user)
        setOpen(false)
    }
    const handleNameChange=(e)=>{
        e.preventDefault()
        setUser({
            ...user,
            name:e.target.value
        })
    }
    const handleSportChange=(e)=>{
        e.preventDefault()
        setUser({
            ...user,
            sport:e.target.value
        })
    }
    const handleDescriptionChange=(e)=>{
        e.preventDefault()
        setUser({
            ...user,
            describe:e.target.value
        })
    }

    const handleSliderChange = (e, newValue) => {
        setUser({
            ...user,
            revenue:newValue
        })
    };

    const handleRevenueChange = (event) => {
        if(event.target.name==='virspit')
            setUser({
                ...user,
                revenue:event.target.value === '' ? '' : Number(event.target.value)
            })
         else
            setUser({
                ...user,
                revenue:event.target.value === '' ? '' : Number(100 - event.target.value)
            })
        

    };
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
                {user.type==='"PLAYER"'?<>Player</>:<>Team</>}
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
                    <Button color="primary" onClick={handleOpen} > Edit </Button>
                    <Button color="secondary" onClick={handleDelete}>Delete</Button>
                    <UserModal
                        openModal={open}
                        handleClose={handleClose}
                        handleEdit={handleEdit}
                        handleNameChange={handleNameChange}
                        handleRadioChange={handleRadioChange}
                        handleSportChange={handleSportChange}
                        handleDescriptionChange={handleDescriptionChange}
                        handleSliderChange={handleSliderChange}
                        handleRevenueChange={handleRevenueChange}
                        modalKind={"update"}
                        user={user}
                        >

                    </UserModal>
                </div>
            </div>
        </li>
    )
}

