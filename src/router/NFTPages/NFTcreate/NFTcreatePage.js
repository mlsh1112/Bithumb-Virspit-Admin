import React from 'react'
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {SubmitBtn} from '../../../components/SubmitBtn';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import useStyles from './createStyle'
import {getplayersBysportID, getsports,uploadproducts} from '../../../api/API'

const players = new Map()
export default function NFTCreatePage({history}) {
    const classes = useStyles()
    const fReader = new FileReader()
    const initialNFT = {
        nftImageFile:"",
        detailImageFile:"",
        title:"",
        sport:"",
        teamPlayerId:"",
        description:"",
        price:0,
        remainedCount:0,
        startDateTime:"",
        exhibition:false
    }
    const [nft,setNFT] = React.useState(initialNFT)
    const [sports,setSports] = React.useState([])
    const [player,setPlayer] = React.useState([])
    const [previewImg, setPreview] = React.useState({
        nftImg:"",
        detailImg:""
    })

    React.useEffect(()=>{
        getsports()
        .then(res=>setSports(res.data.data))
        .catch(err=>console.log(err))
    },[])

    const handleNFTimg=(e)=>{
         setNFT({
                ...nft,
                nftImageFile:e.target.files[0]
        })

        fReader.readAsDataURL(e.target.files[0]);
        fReader.onloadend = function(event){
            setPreview({
                ...previewImg,
                nftImg:event.target.result
            })
        }
    
    }

    const handledetailimg=(e)=>{
        setNFT({
                ...nft,
                detailImageFile:e.target.files[0]
            })
        fReader.readAsDataURL(e.target.files[0]);
        fReader.onloadend = function(event){
            setPreview({
                ...previewImg,
                detailImg:event.target.result
            })
        }
    }

    const handleNFTsubmit=(e)=>{
        e.preventDefault()
        
    }
    const handleNFTtitle=(e)=>{
        setNFT({
            ...nft,
            title:e.target.value
        })
    }
    const handleNFTsport= (e)=>{
        e.preventDefault()
        setNFT({
            ...nft,
            sport:e.target.value
        })

        if(!players.has(e.target.value)){
            getplayersBysportID(String(e.target.value))
            .then(res=>{
                players.set(e.target.value,res.data.data)
                setPlayer(res.data.data)
            })
        }
        else
            setPlayer(players.get(e.target.value))
    
    }
    const handleNFTplayer =(e)=>{
        setNFT({
            ...nft,
            teamPlayerId:e.target.value
        })
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
            price:parseInt(e.target.value)
        })
    }
    const handleNFTcount=(e)=>{
        setNFT({
            ...nft,
            remainedCount:parseInt(e.target.value)
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
    const handleSubmit =()=>{
        console.log(nft)
        console.log(nft.remainedCount)
        
        const form = new FormData();
        form.append('description', nft.description);
        form.append('detailImageFile', nft.detailImageFile);
        form.append('exhibition', nft.exhibition);
        form.append('nftImageFile', nft.nftImageFile);
        form.append('price', nft.price);
        form.append('remainedCount', nft.remainedCount); // 최대 100개
        form.append('startDateTime', nft.startDateTime);
        form.append('teamPlayerId', nft.teamPlayerId);
        form.append('title', nft.title);

        uploadproducts(form)
        .then(res=>{
            alert("UPLOAD SUCCESS")
            history.goBack()
        })
        .catch(err=>console.log(err.response))


    }

    const handleBackBtn=()=>{
        history.goBack()
    }

    return (
        <div>
            <div style={{fontWeight:'bold'}}>
                <IconButton onClick={handleBackBtn}>
                    <ArrowBackIcon className={classes.icon}></ArrowBackIcon>
                </IconButton>
                NFT 등록
                
            </div>
            
            <Paper className={classes.createPage}>
                <div className={classes.imgupload}>
                    <div>
                    <div style={{marginLeft:'120px', fontSize:'bold'}}>Upload NFT picture</div>
                        {
                            (nft.nftImageFile)?
                            (<div >
                                <img src={previewImg.nftImg} className={classes.img} alt="nftimg"/>  <br/>
                                <input accept="image/*" id="icon-button-file" style={{marginLeft:'100px'}} type="file" name="nft" onChange={handleNFTimg} />
                            </div>)
                            :
                            (<div className={classes.img}>
                                <input accept="image/*" id="icon-button-file" type="file" name="nft" onChange={handleNFTimg} />
                            </div>)
                        }
                        
                    </div>
                    
                    <div>
                    <div style={{marginLeft:'120px', fontSize:'bold'}}>Upload Detail picture</div>
                        {
                            (nft.detailImageFile)?
                            (<div >
                                <img src={previewImg.detailImg} className={classes.img} alt="detailimg"/><br/>
                                <input accept="image/*" id="icon-button-file" style={{marginLeft:'100px'}} type="file" name="detail" onChange={handledetailimg}/>
                                
                            </div>)
                            :
                            (<div className={classes.img}>
                                <input accept="image/*" id="icon-button-file"  type="file" name="detail" onChange={handledetailimg}/>
                            </div>)
                        }
                    </div>
                    
                </div>
                
                <form noValidate autoComplete="off" onSubmit={handleNFTsubmit} >
                    <TextField 
                    label="Title"
                    onChange={handleNFTtitle}
                    className={classes.input}/><br/>

                    <FormControl className={classes.sportSelect}>
                    <InputLabel id="demo-simple-select-label">Sport</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={nft.sport}
                            label="sport"
                            onChange={handleNFTsport}
                        >
                            {
                                sports.map((sport,i)=>{
                                    return (<MenuItem key={i} value={sport.id}>{sport.name}</MenuItem>)
                                })
                            }
                        </Select>
                    </FormControl>

                    <FormControl className={classes.playerSelect}>
                        <InputLabel id="demo-simple-select-label">Player OR Team</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={nft.player}
                            label="player"
                            onChange={handleNFTplayer}
                        >
                            {
                                player.map((item,i)=>{
                                    return (<MenuItem key={i} value={item.id}>{item.name}</MenuItem>)
                                })

                            }
                        </Select>
                    </FormControl>
                    <br/>

                    <TextField 
                    label="Describtion"
                    onChange={handleNFTdescribe}
                    className={classes.input}/><br/>

                    <TextField 
                    label="Price"
                    onChange={handleNFTprice}
                    className={classes.input}/><br/>


                    <TextField 
                    label="Count"
                    onChange={handleNFTcount}
                    className={classes.input}/>

                    <TextField
                    id="datetime-local"
                    label="Start Date"
                    type="datetime-local"
                    className={classes.input}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={handleStartdate}
                        />
                    
                    <div>
                        &nbsp;Exhibition &nbsp;&nbsp;&nbsp;&nbsp;
                        <Checkbox
                            checked={nft.exhibition}
                            onChange={handleExhibition}
                            color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox'  }}
                        />
                    </div>
                </form>
                <div className={classes.submitBtn}>
                <SubmitBtn value={"Upload"} onClick={handleSubmit}></SubmitBtn>
                </div>
            </Paper>
        </div>
    )
}
