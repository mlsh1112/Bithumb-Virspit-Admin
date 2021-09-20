import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import NFTViewModal from './NFTViewModal';

const useStyles = makeStyles((theme) => ({
    item:{
        marginBottom:"30px",
        padding:"20px",
        fontWeight:"bold",
        fontSize:"15px",
    },
    data:{
        display:"flex",
        alignItems:"center"
    },
    img:{
        width:"100px",
        height:"auto",
        borderRadius:"10px",
        marginLeft:"30px",
        marginRight:"30px",
    },
  }));
export default function NFTItem(props) {
    const classes = useStyles()
    const nft = props.nft
    const [open,setOpen] = React.useState(false)

    const handleClick=()=>{
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleEdit=()=>{
        setOpen(false)
    }
    return (
        <div>
        <Paper className={classes.item} onClick={handleClick}>
            <div className={classes.data}>
                <img src={nft.img} alt="nftimg" className={classes.img}></img>
                {nft.title} &nbsp;&nbsp;|&nbsp;&nbsp; {nft.name}
            </div>
        </Paper>

        <NFTViewModal
                openModal={open}
                handleClose={handleClose}
                handleEdit={handleEdit}
                nft={nft}
        ></NFTViewModal>
        </div>
    )
}
