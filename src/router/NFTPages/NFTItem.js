import React,{useEffect} from 'react'
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
    const [nft,setNFT] = React.useState(props.nft)
    const [open,setOpen] = React.useState(false)
    const [nftedit,setEdit] = React.useState(false)
    const [player,setPlayer] = React.useState(props.nft.teamPlayerInfo.name)
    const [editImg,SeteditImg] = React.useState({
        nftImageFile:"",
        detailImageFile:""
    })
    const fReader = new FileReader();

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
            form.append('teamPlayerId', res.data.data[0].id)
            form.append('description', nft.description);
            form.append('exhibition', nft.exhibition);
            form.append('price', nft.price);
            form.append('remainedCount', nft.remainedCount); // 최대 100개
            form.append('startDateTime', nft.startDateTime);
            
            form.append('title', nft.title);

            if(nft.nftImageFile)
                form.append('nftImageFile', nft.nftImageFile);
            if(nft.detailImageFile)
                form.append('detailImageFile', nft.detailImageFile);

            
            editproducts(nft.id,form)
            .then(res=>alert("UPDATE SUCCESS"))
            .catch(err=>{
                console.log(err)
                setNFT(props.nft)
            })
        })
        
        
        
        setOpen(false)
    }
    const handleNFTimg=(e)=>{
        setNFT({
            ...nft,
            nftImageFile:e.target.files[0]
        })

        fReader.readAsDataURL(e.target.files[0]);
        fReader.onloadend = function(event){
            SeteditImg({
                ...nft,
                nftImageFile:event.target.result
            })
        }
        
    }

    const handleDetailimg=(e)=>{
        setNFT({
            ...nft,
            detailImageFile:e.target.files[0]
        })
        fReader.readAsDataURL(e.target.files[0]);
        fReader.onloadend = function(event){
            SeteditImg({
                ...nft,
                detailImageFile:event.target.result
            })
        }
        
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
    const handleNFTplayer=(e)=>{
        setPlayer(e.target.value)
    }
    const handleNFTdescribe=(e)=>{
        setNFT({
            ...nft,
            description:e.target.value
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
            remainedCount:e.target.value
        })
    }
    const handleStartdate=(e)=>{
        let time = (e.target.value).split('T').join(' ')+':00'
        setNFT({
            ...nft,
            startDateTime:time
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
                <img src={nft.nftImageUrl} alt="nftImageUrl" className={classes.img}></img>
                {nft.title} &nbsp;&nbsp;|&nbsp;&nbsp; {nft.teamPlayerInfo.name}
            </div>
        </Paper>

        <NFTViewModal
                openModal={open}
                handleClose={handleClose}
                handleEdit={handleEdit}
                handleUpdate={handleUpdate}
                handleNFTimg={handleNFTimg}
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
                editImg={editImg}
                SeteditImg={SeteditImg}
                nft={nft}
        ></NFTViewModal>
        </div>
    )
}
