import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { mainColor } from '../assets/colors';
const useStyles = makeStyles((theme) => ({
    button :{
        backgroundColor:mainColor,
        color:"white",
        fontWeight:"bold",
        width:"250px"
    },
    smallBtn:{
        backgroundColor:mainColor,
        color:"white",
        width:"50px",
        fontSize:10,
        fontWeight:"bold",
    }
  }));
export function SubmitBtn({value,onClick}) {
    const classes = useStyles();
    return (
        <Button variant="contained" disableElevation onClick={onClick} className={classes.button}>
        {value}
        </Button>
    );
}

export function SubmitSmallBtn({value,onClick}) {
    const classes = useStyles();
    return (
        <Button variant="contained" disableElevation onClick={onClick} className={classes.smallBtn}>
        {value}
        </Button>
    );
}