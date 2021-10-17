import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import NFTViewModal from './NFTViewModal';
import {getplayersByname,editproducts} from '../../api/API'

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
    const initalEditNFT = {
        exhibition:props.nft.exhibition,
        description:props.nft.description,
        price:props.nft.price,
        remainedCount:props.nft.remainedCount,
        startDateTime:props.nft.startDateTime,
        title:props.nft.title,
        detailImageFile:""

    }
    const [nft,setNFT] = React.useState(props.nft)
    const [editedNFT, setEditedNFT] = React.useState(initalEditNFT)
    const [open,setOpen] = React.useState(false)
    const [nftedit,setEdit] = React.useState(false)
    const [player,setPlayer] = React.useState(props.nft.teamPlayerInfo.name)

    const handleClick=()=>{
        setEdit(false)
        setOpen(true)
    }

    const handleClose = () => {
        setNFT(props.nft)
        setOpen(false)
        setEdit(false)
    }

    const handleEdit=()=>{
        setEdit(true)
    }

    const handleUpdate=()=>{
        const form = new FormData();
        getplayersByname(player)
        .then(res=>{
            console.log(editedNFT)
            form.append('teamPlayerId', res.data.data[0].id)
            form.append('description', editedNFT.description);
            form.append('exhibition', editedNFT.exhibition);
            form.append('price', editedNFT.price);
            form.append('remainedCount', editedNFT.remainedCount); // 최대 100개
            form.append('startDateTime', editedNFT.startDateTime);
            form.append('title', editedNFT.title);

            if(editedNFT.detailImageFile!=='')
                form.append('detailImageFile', editedNFT.detailImageFile);
            
            
            editproducts(nft.id,form)
            .then(res=>{
                console.log(res.data)
                alert("UPDATE SUCCESS")
                window.location.replace('/home/nft')
            })
            .catch(err=>{
                console.log(err.response)
                setNFT(props.nft)
            })
        })
        
        setEditedNFT(initalEditNFT)
        
        setOpen(false)
    }

    const handleDetailimg=(e)=>{
        setEditedNFT({
            ...editedNFT,
            detailImageFile:e.target.files[0]
        })
        
    }
    const handleNFTtitle=(e)=>{
        setEditedNFT({
            ...editedNFT,
            title:e.target.value
        })
    }
    const handleNFTsport=(e)=>{
        setEditedNFT({
            ...editedNFT,
            sport:e.target.value
        })
    }
    const handleNFTplayer=(e)=>{
        setPlayer(e.target.value)
    }
    const handleNFTdescribe=(e)=>{
        setEditedNFT({
            ...editedNFT,
            description:e.target.value
        })
    }
    const handleNFTprice=(e)=>{
        setEditedNFT({
            ...editedNFT,
            price:parseInt(e.target.value)
        })
    }
    const handleNFTcount=(e)=>{
        setEditedNFT({
            ...editedNFT,
            remainedCount:parseInt(e.target.value)
        })
    }
    const handleStartdate=(e)=>{
        let time = (e.target.value).split('T').join(' ')+':00'
        setEditedNFT({
            ...editedNFT,
            startDateTime:time
        })
    }
    const handleExhibition=(e)=>{
        setEditedNFT({
            ...editedNFT,
            exhibition:e.target.checked
        })
    }
    return (
        <div>
        <Paper className={classes.item} onClick={handleClick}>
            <div className={classes.data}>
                <img src={nft.nftImageUrl} alt="nftImageUrl" className={classes.img}></img>
                {nft.title} &nbsp;&nbsp;|&nbsp;&nbsp; {nft.teamPlayerInfo.name}
            </div>
        </Paper>

        <NFTViewModal
                openModal={open}
                handleClose={handleClose}
                handleEdit={handleEdit}
                handleUpdate={handleUpdate}
                handleDetailimg={handleDetailimg}
                handleNFTplayer={handleNFTplayer}
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
