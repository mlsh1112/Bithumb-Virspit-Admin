import React from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import UserSearch from '../../components/UserSearch';
import TextField from '@material-ui/core/TextField';
import {mainColor} from '../../assets/colors'
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import NFTList from './NFTList';
import { useDispatch } from 'react-redux'
import { callSports } from '../../_actions/sports_action'

const useStyles = makeStyles((theme) => ({
    search: {
        marginRight: theme.spacing(3),
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
      nftsearch:{
          width:"120vh",
          marginTop:"30px"
      }
  }));
export default function NFTPage({history}) {
    const classes = useStyles()
    const [searchuser, setSearchUser] = React.useState("");
    const [selectsport, setSelectSport] = React.useState('');
    const [searchNFT, setSearchNFT] = React.useState('')
    const [sports, setSports] = React.useState([])
    const dispatch = useDispatch()

    React.useEffect(()=>{
        dispatch(callSports).payload.then(res=>{
          setSports(res.data)
        })
    },[])
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
    const handleNFTsubmit = (e) =>{
        e.preventDefault()
        console.log(searchuser,selectsport,searchNFT)
    }
    const handleNFTsearch = (e) =>{
        setSearchNFT(e.target.value)
    }
    const handleCreatePage = () =>{
        history.push('/home/nftcreate')
    }
    return (
        <div>
            <Paper className={classes.search}>

                <UserSearch 
                    handleSelectSportChange={handleSelectSportChange} 
                    handleSearchUser={handleSearchUser}
                    handleUserSearchSubmit={handleUserSearchSubmit}
                    sport={selectsport}
                    sports={sports}></UserSearch>
                <form noValidate autoComplete="off" onSubmit={handleNFTsubmit} >
                    <TextField 
                    label="NFT 명"
                    onChange={handleNFTsearch}
                    className={classes.nftsearch}/>
                </form>
            </Paper>

            <Paper className={classes.list}>
                <IconButton onClick={handleCreatePage}>
                    <AddCircleIcon className={classes.icon}></AddCircleIcon>
                </IconButton>
                <NFTList></NFTList>
            </Paper>
        </div>
    )
}
