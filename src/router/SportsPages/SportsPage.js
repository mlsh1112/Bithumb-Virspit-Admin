import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {mainColor} from '../../assets/colors'
import SportModal from './SportModal';
import SportsList from './SportsList';
import { updatesport } from '../../api/API';

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
    const [open, setOpen] = React.useState(false)

    const initialSport = {
      name:"",
      iconUrl:"",
    }
    const [sport,setSport] = React.useState(initialSport)
    const [updateKeyword,setUpdateKeyword] = React.useState("")
    const [searchKeyword,setSearchKeyword] = React.useState("")
    const fReader = new FileReader();

    const handleOpen = () => {
      setOpen(true);
    }

    const handleClose = () => {
      setOpen(false);
    }
    const handleUpload = () => {
      console.log(JSON.stringify(sport))

      updatesport(JSON.stringify(sport))
      .then(res=>console.log("UPLOAD SUCCESS - SPORT"))
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
      fReader.readAsDataURL(e.target.files[0]);
      fReader.onloadend = function(event){
          setSport({
              ...sport,
              iconUrl:event.target.result
          })
      }
      
  }
    
    return (
        <div>
            <Paper className={classes.search}>
                <section>
                    <form noValidate autoComplete="off" className={classes.searchForm}>
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

              <SportsList></SportsList>
            </Paper>
        </div>
    )
}
