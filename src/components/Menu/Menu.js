import React,{useState,useEffect} from 'react';
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
    width:"100%",
  },
  item :{
    height:"10vh",
    color:"black",
    fontWeight:"bold",
  },
  clickitem :{
    height:"10vh",
    color:mainColor,
    fontWeight:"bold",
  },
}));

export default function Menu({match,history}) {
  const classes = useStyles();
  const [click,setClick] = useState("")

  useEffect(()=>{
    let pathname = history.location.pathname.split('/')[2]
    setClick(pathname)
  })

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <MenuList >
          
          <Link to={`${match.url}`} id="link">
            <MenuItem className={click?classes.item:classes.clickitem}>종목 관리</MenuItem>
          </Link>

          <Link to={`${match.url}/user`} id="link">
            <MenuItem className={click==='user'?classes.clickitem:classes.item}>팀/선수 관리</MenuItem>
          </Link>

          <Link to={`${match.url}/nft`} id="link">
            <MenuItem className={click==='nft'?classes.clickitem:classes.item}>NFT 관리</MenuItem>
          </Link>

          <Link to={`${match.url}/payment`} id="link">
            <MenuItem className={click==='payment'?classes.clickitem:classes.item}>결제 관리</MenuItem>
          </Link>

          <Link to={`${match.url}/advertisement`} id="link">
            <MenuItem className={click==='advertisement'?classes.clickitem:classes.item}>광고 관리</MenuItem>
          </Link>
          
        </MenuList>
      </Paper>
    </div>
  );
}

