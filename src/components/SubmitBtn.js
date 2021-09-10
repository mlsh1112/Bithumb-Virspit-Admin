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
    }
  }));
export default function SubmitBtn({value,onClick}) {
    const classes = useStyles();
    return (
        <Button variant="contained" disableElevation onClick={onClick} className={classes.button}>
        {value}
        </Button>
    );
}
