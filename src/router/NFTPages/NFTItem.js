import React from 'react'
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
    const [nft,setNFT] = React.useState(props.nft)
    const [open,setOpen] = React.useState(false)
    const [nftedit,setEdit] = React.useState(false)

    const fReader = new FileReader();

    const handleClick=()=>{
        setEdit(false)
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
        setEdit(false)
    }

    const handleEdit=()=>{
        setEdit(true)
    }

    const handleUpdate=()=>{
        console.log(nft)
        setOpen(false)
    }
    const handleNFTimg=(e)=>{
        fReader.readAsDataURL(e.target.files[0]);
        fReader.onloadend = function(event){
            setNFT({
                ...nft,
                nftimg:event.target.result
            })
        }
        
    }

    const handleDetailimg=(e)=>{
        fReader.readAsDataURL(e.target.files[0]);
        fReader.onloadend = function(event){
            setNFT({
                ...nft,
                detailImg:event.target.result
            })
        }
        
    }
    const handleNFTname=(e)=>{
        setNFT({
            ...nft,
            name:e.target.value
        })
    }
    const handleNFTtitle=(e)=>{
        setNFT({
            ...nft,
            title:e.target.value
        })
    }
    const handleNFTsport=(e)=>{
        setNFT({
            ...nft,
            sport:e.target.value
        })
    }
    const handleNFTdescribe=(e)=>{
        setNFT({
            ...nft,
            describtion:e.target.value
        })
    }
    const handleNFTprice=(e)=>{
        setNFT({
            ...nft,
            price:e.target.value
        })
    }
    const handleNFTcount=(e)=>{
        setNFT({
            ...nft,
            count:e.target.value
        })
    }
    const handleStartdate=(e)=>{
        setNFT({
            ...nft,
            startDate:e.target.value
        })
    }
    const handleExhibition=(e)=>{
        setNFT({
            ...nft,
            exhibition:e.target.checked
        })
    }
    return (
        <div>
        <Paper className={classes.item} onClick={handleClick}>
            <div className={classes.data}>
                <img src={nft.nftimg} alt="nftimg" className={classes.img}></img>
                {nft.title} &nbsp;&nbsp;|&nbsp;&nbsp; {nft.name}
            </div>
        </Paper>

        <NFTViewModal
                openModal={open}
                handleClose={handleClose}
                handleEdit={handleEdit}
                handleUpdate={handleUpdate}
                handleNFTimg={handleNFTimg}
                handleDetailimg={handleDetailimg}
                handleNFTname={handleNFTname}
                handleNFTtitle={handleNFTtitle}
                handleNFTsport={handleNFTsport}
                handleNFTdescribe={handleNFTdescribe}
                handleNFTprice={handleNFTprice}
                handleNFTcount={handleNFTcount}
                handleStartdate={handleStartdate}
                handleExhibition={handleExhibition}
                edit={nftedit}
                nft={nft}
        ></NFTViewModal>
        </div>
    )
}
