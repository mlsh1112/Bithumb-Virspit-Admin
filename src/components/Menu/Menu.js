import React,{useState} from 'react';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import './Menu.css'
import {mainColor} from '../../assets/colors'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(3),
    width:"15%",
  },
  item :{
    height:"10vh",
    color:"black",
    fontWeight:"bold",
  }
}));

export default function Menu({match}) {
  const classes = useStyles();
  const [exTarget, setexTarget] = useState("")

  const handleClick = (e) =>{
    if(exTarget)
      exTarget.style.color = 'black'

    e.target.style.color=mainColor

    setexTarget(e.target)
  }
  
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <MenuList >
          
          <Link to={`${match.url}`} id="link" onClick={handleClick}>
            <MenuItem className={classes.item}>종목 관리</MenuItem>
          </Link>

          <Link to={`${match.url}/user`} id="link" onClick={handleClick}>
            <MenuItem className={classes.item}>팀/선수 관리</MenuItem>
          </Link>

          <Link to={`${match.url}/nft`} id="link" onClick={handleClick}>
            <MenuItem className={classes.item}>NFT 관리</MenuItem>
          </Link>

          <Link to={`${match.url}/payment`} id="link" onClick={handleClick}>
            <MenuItem className={classes.item}>결제 관리</MenuItem>
          </Link>

          <Link to={`${match.url}/advertisement`} id="link" onClick={handleClick}>
            <MenuItem className={classes.item}>광고 관리</MenuItem>
          </Link>
          
        </MenuList>
      </Paper>
    </div>
  );
}