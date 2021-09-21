import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import UserSearch from '../../components/UserSearch';
import Paper from '@material-ui/core/Paper';
import UserList from './UserList';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {mainColor} from '../../assets/colors'
import UserModal from './UserModal';
const useStyles = makeStyles((theme) => ({
    search: {
        marginRight: theme.spacing(3),
        height:"10vh",
        marginBottom:"20px",
        padding:"30px"
      },
      list: {
        marginRight: theme.spacing(3),
        padding:"30px"
      },
      icon:{
        color:mainColor,
        fontSize:"35px"
      },
  }));
export default function UserPage() {
    const classes = useStyles()
    const initalUser = {
        name:"",
        sport:"",
        describe:"",
        type:"",
        revenue:0
    }

    const [newuser,setNewuser] = React.useState(initalUser)
    const [open, setOpen] = React.useState(false)
    const [selectsport, setSelectSport] = React.useState('');
    const [searchuser, setSearchUser] = React.useState("");
    

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false)
    }

    const handleSelectSportChange = (event) => {
        setSelectSport(event.target.value);
    };
    const handleSearchUser = (e) =>{
        setSearchUser(e.target.value)
    }
    const handleUserSearchSubmit =(e)=>{
        console.log(searchuser,selectsport)
        e.preventDefault()
    }

    const handleUpload = (e) =>{
        e.preventDefault()
        console.log(newuser)
        setNewuser(initalUser)
        setOpen(false)
    }
    const handleNameChange=(e)=>{
        e.preventDefault()
        setNewuser({
            ...newuser,
            name:e.target.value
        })
    }
    const handleSportChange=(e)=>{
        e.preventDefault()
        setNewuser({
            ...newuser,
            sport:e.target.value
        })
    }
    const handleDescriptionChange=(e)=>{
        e.preventDefault()
        setNewuser({
            ...newuser,
            describe:e.target.value
        })
    }

    const handleSliderChange = (e, newValue) => {
        setNewuser({
            ...newuser,
            revenue:newValue
        })
    };
    const handleRadioChange = (e) => {
        e.preventDefault()
        setNewuser({
            ...newuser,
            type:e.target.value
        })
    };
    const handleRevenueChange = (event) => {
        if(event.target.name==='virspit')
        setNewuser({
                ...newuser,
                revenue:event.target.value === '' ? '' : Number(event.target.value)
            })
         else
         setNewuser({
                ...newuser,
                revenue:event.target.value === '' ? '' : Number(100 - event.target.value)
            })
    };
    return (
        <div>
            <Paper className={classes.search}>
                <UserSearch 
                    handleSelectSportChange={handleSelectSportChange} 
                    handleSearchUser={handleSearchUser}
                    handleUserSearchSubmit={handleUserSearchSubmit}
                    sport={selectsport}>
                    </UserSearch>
            </Paper>
            <Paper className={classes.list}>
                <IconButton onClick={handleOpen}>
                    <AddCircleIcon className={classes.icon}></AddCircleIcon>
                </IconButton>
                <UserModal
                    openModal={open}
                    user={newuser}
                    handleClose={handleClose}
                    handleUpload={handleUpload}
                    handleNameChange={handleNameChange}
                    handleRadioChange={handleRadioChange}
                    handleSportChange={handleSportChange}
                    handleDescriptionChange={handleDescriptionChange}
                    handleSliderChange={handleSliderChange}
                    handleRevenueChange={handleRevenueChange}
                    modalKind={"upload"}
                />

                <UserList></UserList>
            </Paper>
        </div>
    )
}
