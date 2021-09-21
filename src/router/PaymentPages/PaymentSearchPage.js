import React from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import UserSearch from '../../components/UserSearch';
import TextField from '@material-ui/core/TextField';
import DateRangePicker from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';

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
      nftsearch:{
          width:"120vh",
          marginTop:"30px"
      },
      datesearch:{

        marginBottom:"30px"
      }
  }));
export default function PaymentSearchPage() {
    const classes = useStyles()
    const [searchuser, setSearchUser] = React.useState("");
    const [selectsport, setSelectSport] = React.useState('');
    const [searchNFT, setSearchNFT] = React.useState('')
    const [date, setDate] = React.useState([null, null]);
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
    return (
        <div>
            <Paper className={classes.search}>
                <div className={classes.datesearch}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateRangePicker
                            startText="결제 날짜 (start)"
                            endText="결제 날짜 (end)"
                            value={date}
                            onChange={(newValue) => {
                            setDate(newValue);
                            }}
                            renderInput={(startProps, endProps) => (
                            <React.Fragment>
                                <TextField {...startProps} />
                                <Box sx={{ mx: 2 }}> to </Box>
                                <TextField {...endProps} />
                            </React.Fragment>
                            )}
                        />
                        </LocalizationProvider>
                    </div>
                <UserSearch 
                    handleSelectSportChange={handleSelectSportChange} 
                    handleSearchUser={handleSearchUser}
                    handleUserSearchSubmit={handleUserSearchSubmit}
                    sport={selectsport}></UserSearch>
                <form noValidate autoComplete="off" onSubmit={handleNFTsubmit} >
                    <TextField 
                    label="NFT 명"
                    onChange={handleNFTsearch}
                    className={classes.nftsearch}/>
                </form>
                </Paper>
        </div>
    )
}
