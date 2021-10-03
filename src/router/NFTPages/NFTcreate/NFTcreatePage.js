import React from 'react'
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SubmitBtn from '../../../components/SubmitBtn';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import useStyles from './createStyle'

const players = new Map()
export default function NFTCreatePage({history}) {
    const classes = useStyles()
    const fReader = new FileReader();
    const initialNFT = {
        nftimg:"",
        detailImg:"",
        title:"",
        name:"",
        sport:"",
        player:"",
        describtion:"",
        price:0,
        count:0,
        startDate:"",
        exhibition:false
    }
    const [nft,setNFT] = React.useState(initialNFT)
    const [sports,setSports] = React.useState([
        {id:1, sport:"soccer"},
        {id:2, sport:"baseball"},
        {id:3, sport:"basketball"},])
    const [sport,setSport] = React.useState("")
    const [player,setPlayer] = React.useState([])

    const exdata = [
        [],
        ["park", "son","Tottenham"],
        ["park"],
        ["kim"],
    ]
    const handleNFTimg=(e)=>{
        fReader.readAsDataURL(e.target.files[0]);
        fReader.onloadend = function(event){
            setNFT({
                ...nft,
                nftimg:event.target.result
            })
        }
        
    }

    const handledetailimg=(e)=>{
        fReader.readAsDataURL(e.target.files[0]);
        fReader.onloadend = function(event){
            setNFT({
                ...nft,
                detailImg:event.target.result
            })
        }
        
    }

    const handleNFTsubmit=(e)=>{
        e.preventDefault()
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
        e.preventDefault()
        setNFT({
            ...nft,
            sport:e.target.value
        })

        if(!players.has(e.target.value)){
            players.set(e.target.value,exdata[e.target.value])
        }
        
        setPlayer(players.get(e.target.value))
    
    }

    const handleNFTplayer =(e)=>{
        setNFT({
            ...nft,
            player:e.target.value
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
    const handleSubmit =()=>{
        console.log(nft)
        alert("upload")
        history.goBack()
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
                            (nft.nftimg)?
                            (<div >
                                <img src={nft.nftimg} className={classes.img} alt="nftimg"/>  <br/>
                                <input accept="image/*" id="icon-button-file" style={{marginLeft:'100px'}} type="file" name="nft" onChange={handleNFTimg} />
                            </div>)
                            :
                            (<div className={classes.img}>
                                <input accept="image/*" id="icon-button-file" type="file" name="nft" onChange={handleNFTimg} />
                                {/* <label htmlFor="icon-button-file">
                                    <IconButton color="primary" aria-label="upload picture" component="span">
                                    <PhotoCamera />
                                    </IconButton><br/>
                                </label> */}
                            </div>)
                        }
                        
                    </div>
                    
                    <div>
                    <div style={{marginLeft:'120px', fontSize:'bold'}}>Upload Detail picture</div>
                        {
                            (nft.detailImg)?
                            (<div >
                                <img src={nft.detailImg} className={classes.img} alt="detailimg"/><br/>
                                <input accept="image/*" id="icon-button-file" style={{marginLeft:'100px'}} type="file" name="detail" onChange={handledetailimg}/>
                                
                            </div>)
                            :
                            (<div className={classes.img}>
                                <input accept="image/*" id="icon-button-file"  type="file" name="detail" onChange={handledetailimg}/>
                                {/* <label htmlFor="icon-button-file">
                                    <IconButton color="primary" aria-label="upload picture" component="span">
                                    <PhotoCamera />
                                    </IconButton>
                                </label> */}
                            </div>)
                        }
                    </div>
                    
                </div>
                
                <form noValidate autoComplete="off" onSubmit={handleNFTsubmit} >
                    <TextField 
                    label="Title"
                    onChange={handleNFTtitle}
                    className={classes.input}/><br/>

                    <TextField 
                    label="Name"
                    onChange={handleNFTname}
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
                                    return (<MenuItem key={i} value={sport.id}>{sport.sport}</MenuItem>)
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
                                    return (<MenuItem key={i} value={item}>{item}</MenuItem>)
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
