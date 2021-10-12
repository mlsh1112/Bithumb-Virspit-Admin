import React,{useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import UserSearch from '../../components/UserSearch';
import Paper from '@material-ui/core/Paper';
import UserList from './UserList';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {mainColor} from '../../assets/colors'
import UserModal from './UserModal';
import { useDispatch } from 'react-redux'
import { callSports  } from '../../_actions/sports_action'
import { callPlayers } from '../../_actions/players_action';
import { updateplayer, getplayerSearch, getplayersBysportID, getplayersBypage} from '../../api/API';
import Pager from '../../components/Pager';

let isSearch=false

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

  const playerList = new Map()
export default function UserPage() {
    const classes = useStyles()
    const initalUser = {
        name:"",
        sport:"",
        description:"",
        type:"",
        revenueShareRate:0,
        sportsId: 0
    }

    const [newuser,setNewuser] = React.useState(initalUser)
    const [open, setOpen] = React.useState(false)
    const [selectsport, setSelectSport] = React.useState('');
    const [searchplayer, setSearchUser] = React.useState("");
    const [searchResult, setSearch] = React.useState([])
    const [sports,setSports] = React.useState([])
    const [players,setPlayers] = React.useState([])
    const [page,setPage]= React.useState(1)
    const [total,setTotal] = React.useState(0)

    const dispatch = useDispatch()


    useEffect(()=>{
        dispatch(callSports).payload.then(res=>{
          setSports(res.data)
        })
        dispatch(callPlayers).payload.then(res=>setTotal(res.data.length))
        
        isSearch=false
    },[])

    useEffect(()=>{
        setSearch([])
        getplayersBypage({page:page,size:5})
        .then(res=>setSearch(res.data.data))
        .catch(err=>console.log(err))
    },[page])

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false)
    }

    const handleSelectSportChange = (e) => {
        isSearch=false
        setSelectSport(e.target.value);
        if(!playerList.has(e.target.value)){
            getplayersBysportID(String(e.target.value))
            .then(res=>{
                playerList.set(e.target.value,res.data.data)
                setPlayers(res.data.data)
            })
        }
        else
            setPlayers(playerList.get(e.target.value))
    };
    const handleSearchPlayer = (e) =>{
        isSearch=true
        setSearchUser(e.target.value)

        getplayerSearch({sportsId:selectsport,name:e.currentTarget.getAttribute("name")})
        .then(res=>{
            setSearch([])
            setSearch(res.data.data)
            setTotal(res.data.data.length)
            setPage(1)
        })
        .catch(err=>console.log(err))
    }

    const handleUpload = (e) =>{
        e.preventDefault()
        const data = {
            name: newuser.name,
            description: newuser.description,
            type: newuser.type,
            revenueShareRate: parseInt(newuser.revenueShareRate),
            sportsId: parseInt(newuser.sport)
          }
          console.log(data)
        updateplayer(data)
        .then(res=>{
            alert("UPLOAD SUCCESS - PLAYER OR TEAM")
            window.location.replace("/home/user")
        })
        .catch(err=>console.log(err))

        setNewuser(initalUser)
        setOpen(false)
    }
    const handleNameChange=(e)=>{
        
        setNewuser({
            ...newuser,
            name:e.target.value
        })
    }
    const handleSportChange=(e)=>{
        setNewuser({
            ...newuser,
            sport:e.target.value
        })
    }
    const handleDescriptionChange=(e)=>{
        
        setNewuser({
            ...newuser,
            description:e.target.value
        })
    }

    const handleSliderChange = (e, newValue) => {
        setNewuser({
            ...newuser,
            revenueShareRate:newValue
        })
    };
    const handleRadioChange = (e) => {
        
        setNewuser({
            ...newuser,
            type:e.target.value
        })
    };
    const handleRevenueChange = (event) => {
        if(event.target.name==='virspit')
        setNewuser({
                ...newuser,
                revenueShareRate:event.target.value === '' ? '' : Number(event.target.value)
            })
         else
         setNewuser({
                ...newuser,
                revenueShareRate:event.target.value === '' ? '' : Number(100 - event.target.value)
            })
    };

    const handlePaging=(e)=>{
        setPage(e.target.value)
    }
    return (
        <div>
            <Paper className={classes.search}>
                <UserSearch 
                    handleSelectSportChange={handleSelectSportChange} 
                    handleSearchPlayer={handleSearchPlayer}
                    //handleUserSearchSubmit={handleUserSearchSubmit}
                    sport={selectsport}
                    sports={sports}
                    players={players}
                    searchplayer={searchplayer}>
                    </UserSearch>
            </Paper>
            <Paper className={classes.list}>
                <IconButton onClick={handleOpen}>
                    <AddCircleIcon className={classes.icon}></AddCircleIcon>
                </IconButton>
                <UserModal
                    openModal={open}
                    user={newuser}
                    sports = {sports}
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

                <UserList 
                    sports={sports} 
                    search={searchResult}
                    isSearch={isSearch}></UserList>

                <Pager page={page} count={5} total={total} paging={handlePaging}></Pager>
            </Paper>
        </div>
    )
}
