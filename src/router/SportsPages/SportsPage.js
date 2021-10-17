import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {mainColor} from '../../assets/colors'
import SportModal from './SportModal';
import SportsList from './SportsList';
import Pager from '../../components/Pager'
import { updatesport,getsportByname,getsportByPage } from '../../api/API';
import { useDispatch } from 'react-redux'
import { callSports } from '../../_actions/sports_action'

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
  searchForm:{
    width: '100%',
    marginBottom:"10px"
  },
  searchBar:{
    width: '90%',
  },
  icon:{
    color:mainColor,
    fontSize:"35px"
  },
}));
export default function SportsPage() {
    const classes = useStyles()
    const SIZE = 3
    const [open, setOpen] = React.useState(false)

    const initialSport = {
      name:"",
      iconUrl:"",
    }
    const [sport,setSport] = React.useState(initialSport)
    const [sports,setSports] = React.useState([])
    const [searchKeyword,setSearchKeyword] = React.useState("")
    const [page,setPage] = React.useState(1)
    const [total,setTotal] = React.useState(0)

    const dispatch = useDispatch()
    React.useEffect(()=>{
      dispatch(callSports).payload.then(res=>setTotal(res.data.length))
    },[])

    React.useEffect(()=>{
      setSports([])
      getsportByPage({page:page,size:SIZE})
        .then(res=>setSports(res.data.data))
        .catch(err=>console.log(err.response))
      
    },[page])


    const handleOpen = () => {
      setOpen(true);
    }

    const handleClose = () => {
      setOpen(false);
    }
    const handleUpload = () => {
      console.log(sport)
      const form = new FormData();

      form.append("name", sport.name);
      form.append("iconFile", sport.iconUrl);

      updatesport(form)
      .then(res=>{alert("UPLOAD SUCCESS - SPORT")
      window.location.replace("/home")})
      .catch(err=>console.log(err))
      
      setSport(initialSport)
      setOpen(false);
    }
    const handleUpdateChange = (e) => {
      setSport({
          ...sport,
          name:e.target.value
      })
    };

    const handleSearchChange = (event) => {
      setSearchKeyword(event.target.value);
    };
    const handleImage = (e) =>{
      setSport({
        ...sport,
        iconUrl:e.target.files[0]
    })
  }
  const handleSearch = (e) =>{
    e.preventDefault()
    setSports([])
    setPage(1)
    getsportByname(searchKeyword)
    .then(res=>{
      setTotal(res.data.data.length)
      setSports(res.data.data)
    })
    .catch(err=>console.log(err.response))
    
  }
  const handlePaging=(e)=>{
    setPage(e.target.value)
  }
    
    return (
        <div>
            <Paper className={classes.search}>
                <section>
                    <form noValidate autoComplete="off" className={classes.searchForm} onSubmit={handleSearch}>
                        <TextField 
                          className={classes.searchBar}
                          onChange={handleSearchChange}
                          label="종목을 검색하세요!" />
                    </form>
                </section>
            </Paper>
                
            <Paper className={classes.list}>
              <IconButton onClick={handleOpen}>
                <AddCircleIcon className={classes.icon}></AddCircleIcon>
              </IconButton>

              <SportModal 
                openModal={open} 
                handleClose={handleClose}
                handleUpload={handleUpload}
                handleChange={handleUpdateChange}
                handleImage={handleImage}
                modalKind={"upload"}
                sport={""}>
              </SportModal>

              <SportsList
                sports={sports}
                ></SportsList>

              <Pager page={page} count={SIZE} total={total} paging={handlePaging}/>
            </Paper>
        </div>
    )
}
