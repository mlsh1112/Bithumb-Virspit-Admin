import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    search: {
      marginLeft: theme.spacing(5),
      width:"100vh",
    },
    formControl: {
        minWidth: 150,
    },
    formControlPlayer: {
      minWidth: 750,
      marginLeft:30
  },
  }));

export default function UserSearch(props) {
    const classes = useStyles()
    const [players,setPlayers] = React.useState([])
    const sport = props.sport || ""

    return (
        <div style={{display:"flex"}}>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label">종목</InputLabel>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    value={sport}
                    onChange={props.handleSelectSportChange}
                >
                  {
                    props.sports.map(sport=>{
                      return(<MenuItem value={sport.id} key={sport.id} name={sport.name}>{sport.name}</MenuItem>)
                    })
                  }
                </Select>
            </FormControl>
            <FormControl className={classes.formControlPlayer}>
                <InputLabel id="demo-simple-select-label">Player OR Team</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={props.searchplayer}
                            label="player"
                            onChange={props.handleSearchPlayer}
                        >
                            {
                                props.players.map((item,i)=>{
                                    return (<MenuItem key={i} value={item.id} name={item.name}>{item.name}</MenuItem>)
                                })

                            }
                        </Select>
            </FormControl>
        </div>
    )
}



/*
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import SportsList from '../router/SportsPages/SportsList';
const useStyles = makeStyles((theme) => ({
    search: {
      marginLeft: theme.spacing(5),
      width:"100vh",
    },
    formControl: {
        minWidth: 150,
    },
  }));

  const players = new Map()
export default function UserSearch(props) {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false);
    const sport = props.sport || ""
    
    const handleClose = () => {
      setOpen(false);
    }
  
    const handleOpen = () => {
      setOpen(true);
    }


    return (
        <div style={{display:"flex"}}>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label">종목</InputLabel>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={sport}
                    onChange={props.handleSelectSportChange}
                >
                  {
                    props.sports.map(sport=>{
                      return(<MenuItem value={sport.id} key={sport.id}>{sport.name}</MenuItem>)
                    })
                  }
                </Select>
            </FormControl>

            <form noValidate autoComplete="off" onSubmit={props.handleUserSearchSubmit} >
                <TextField 
                  label="팀 / 선수 이름"
                  onChange={props.handleSearchUser}
                  className={classes.search}/>
            </form>
        </div>
    )
}

*/