import React,{useState} from 'react'
import Button from '@material-ui/core/Button'
import { mainColor } from '../../assets/colors'
import UserModal from './UserModal'
import { editplayer ,deleteplayer} from '../../api/API'

export default function UserItem(props) {
    const initalUser = props.user
    const [user,setUser] = useState(props.user)
    const [open,setOpen] = useState(false)

    const handleRadioChange = (e) => {
        e.preventDefault()
        setUser({
            ...user,
            type:e.target.value
        })
    };
    const handleDelete = () =>{
        deleteplayer(user.id)
        .then(res=>{
            alert("DELETE SUCCESS - PLAYER OR TEAM")
            window.location.replace("/home/user")
        })
        .catch(err=>console.log(err))
    }
    const handleOpen = () =>{
        setOpen(true)
    }

    const handleClose = () => {
        setUser(initalUser)
        setOpen(false)
    }

    const handleEdit=(e)=>{
        e.preventDefault()
        const data = {
            id : user.id,
            name: user.name,
            description: user.description,
            type: user.type,
            revenueShareRate: user.revenueShareRate,
            sportsId:  user.sportsId
        }
        console.log(data)

        editplayer((data))
        .then(res=>{
            alert("UPDATE SUCCESS - PLAYER OR TEAM")
            window.location.replace("/home/user")
        })
        .catch(err=>console.log(err))

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
            sportsId:e.target.value
        })
    }
    const handleDescriptionChange=(e)=>{
        //e.preventDefault()
        setUser({
            ...user,
            description:e.target.value
        })
    }

    const handleSliderChange = (e, newValue) => {
        setUser({
            ...user,
            revenueShareRate:newValue
        })
    };

    const handleRevenueChange = (event) => {
        if(event.target.name==='virspit')
            setUser({
                ...user,
                revenueShareRate:event.target.value === '' ? '' : Number(event.target.value)
            })
         else
            setUser({
                ...user,
                revenueShareRate:event.target.value === '' ? '' : Number(100 - event.target.value)
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
                {user.type==='PLAYER'?<>Player</>:<>Team</>}
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
                        sports = {props.sports}
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

