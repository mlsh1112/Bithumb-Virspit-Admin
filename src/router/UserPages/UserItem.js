import React from 'react'
import Button from '@material-ui/core/Button'
import { mainColor } from '../../assets/colors'
import UserModal from './UserModal'

export default function UserItem(props) {
    const user = props.user
    const [open,setOpen] = React.useState(false)
    const [name,setName] = React.useState(user.name)
    const [type, setType] = React.useState(user.type)
    const [sport,setSport] = React.useState("")
    const [describe,setDescript] = React.useState("")
    const [revenue,setRevenue] = React.useState(0)
    const [error, setError] = React.useState(false)
    
    const handleRadioChange = (event) => {
        setType(event.target.value)
        setError(false)
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
        console.log(name,type,sport,describe)
        setOpen(false)
    }
    const handleNameChange=(e)=>{
        console.log(e.target.value)
        setName(e.target.value)
    }
    const handleSportChange=(e)=>{
        setSport(e.target.value)
    }
    const handleDescriptionChange=(e)=>{
        setDescript(e.target.value)
    }

    const handleSliderChange = (event, newValue) => {
        setRevenue(newValue);
    };

    const handleRevenueChange = (event) => {
        if(event.target.name==='virspit')
            setRevenue(event.target.value === '' ? '' : Number(event.target.value));
        else
            setRevenue(event.target.value === '' ? '' : Number(100-event.target.value));
        

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
                        revenue={revenue}
                        >

                    </UserModal>
                </div>
            </div>
        </li>
    )
}

