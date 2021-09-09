import React from 'react';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(3),
    width:"15%",
  },
  item :{
    height:"10vh"
  }
}));

export default function Menu() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <MenuList >
          <MenuItem className={classes.item}>종목 관리</MenuItem>
          <MenuItem className={classes.item}>팀/선수 관리</MenuItem>
          <MenuItem className={classes.item}>NFT 관리</MenuItem>
          <MenuItem className={classes.item}>결제 관리</MenuItem>
          <MenuItem className={classes.item}>광고 관리</MenuItem>
        </MenuList>
      </Paper>
    </div>
  );
}
