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
import {getproductSearch,getplayersBysportID,getproducts,getproductsByPage} from '../../api/API'
import Pager from '../../components/Pager';

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

  const playerList = new Map()
  let isSearch = false
export default function NFTPage({history}) {
    const classes = useStyles()
    const [searchplayer, setSearchPlayer] = React.useState("");
    const [selectsport, setSelectSport] = React.useState('');
    const [searchNFT, setSearchNFT] = React.useState('')
    const [resultNFT,setresultNFT] = React.useState([])
    const [sports, setSports] = React.useState([])
    const [players,setPlayers] = React.useState([])
    const [page,setPage] = React.useState(1)
    const [total,setTotal] = React.useState(0)
    const dispatch = useDispatch()

    React.useEffect(()=>{
        dispatch(callSports).payload.then(res=>{
          setSports(res.data)
        })
        getproducts()
        .then(res=>{
            setTotal(res.data.data.list.length)
        })
        .catch(err=>console.log(err))
        
        isSearch=false
    },[])

    React.useEffect(()=>{
        setresultNFT([])
        getproductsByPage({page:page,size:3})
        .then(res=>{
            setresultNFT(res.data.data.list)
        })

    },[page])
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
        isSearch=false
        console.log(e.target.value.id)
        setSearchPlayer(e.target.value)

    }
    const handleUserSearchSubmit =(e)=>{
        e.preventDefault()
    }
    const handleNFTsubmit = (e) =>{
        isSearch=true
        e.preventDefault()
        getproductSearch({sportsId:String(selectsport),teamPlayerId:searchplayer,title:searchNFT})
        .then(res=>{
            console.log(res.data.data.list,isSearch)
            setresultNFT([])
            setresultNFT(res.data.data.list)})
        .catch(err=>console.log(err))
    }
    const handleNFTsearch = (e) =>{
        setSearchNFT(e.target.value)
    }
    const handleCreatePage = () =>{
        history.push('/home/nftcreate')
    }
    const handlePaging = (e) =>{
        setPage(e.target.value)
    }
    return (
        <div>
            <Paper className={classes.search}>

                <UserSearch 
                    handleSelectSportChange={handleSelectSportChange} 
                    handleSearchPlayer={handleSearchPlayer}
                    handleUserSearchSubmit={handleUserSearchSubmit}
                    sport={selectsport}
                    sports={sports}
                    players={players}
                    searchplayer={searchplayer}
                    ></UserSearch>
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
                <NFTList sports={sports} resultNFT={resultNFT} isSearch={isSearch}></NFTList>
                <Pager page={page} count={3} total={total} paging={handlePaging}/>
            </Paper>
        </div>
    )
}
