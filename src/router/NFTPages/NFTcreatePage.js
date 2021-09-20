import React from 'react'
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import SubmitBtn from '../../components/SubmitBtn';

const useStyles = makeStyles((theme) => ({
    createPage:{
        marginRight: theme.spacing(3),
        marginTop: theme.spacing(3),
        padding:"40px"
    },
    input:{
        width:'100vh',
        marginBottom:'40px'
    },
    imgupload:{
        display:'flex',

    },
    img:{
        marginLeft:'100px',
        backgroundColor:"#eee",
        borderRadius:"10px",
        width:"200px",
        height:"250px"
    },
    imginput:{
        display:'none'
    },
    submitBtn:{
        display:'flex',
        justifyContent:"center"
    }
  }));
export default function NFTCreatePage({history}) {
    const classes = useStyles()

    const fReader = new FileReader();
    const initialNFT = {
        nftimg:"",
        detailImg:"",
        title:"",
        name:"",
        sport:"",
        describtion:"",
        price:0,
        count:0,
        startDate:"",
        exhibition:false
    }
    const [nft,setNFT] = React.useState(initialNFT)

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

    const handleSubmit =()=>{
        console.log(nft)
        alert("upload")
        history.goBack()
    }

    return (
        <div>
            NFT 등록
            <Paper className={classes.createPage}>
                <div className={classes.imgupload}>
                    <div>
                        {
                            (nft.nftimg)?
                            (<div >
                                <img src={nft.nftimg} className={classes.img} alt="nftimg"/>
                                {/* <input accept="image/*" className={classes.imginput} id="icon-button-file" type="file" name="nft" onChange={handleNFTimg} />
                                <label htmlFor="icon-button-file">
                                    <img src={nft.nftimg} className={classes.img} alt="nftimg"/>
                                </label> */}
                            </div>)
                            :
                            (<div className={classes.img}>
                                <input accept="image/*" className={classes.imginput} id="icon-button-file" type="file" name="nft" onChange={handleNFTimg} />
                                <label htmlFor="icon-button-file">
                                    <IconButton color="primary" aria-label="upload picture" component="span">
                                    <PhotoCamera />
                                    </IconButton>
                                </label>
                            </div>)
                        }
                        
                    </div>
                    
                    <div>
                        {
                            nft.detailImg?
                            (<div >
                                <img src={nft.detailImg} className={classes.img} alt="detailimg"/>
                                {/* <input accept="image/*" className={classes.imginput} id="icon-button-file" type="file" name="detail" onChange={handledetailimg} />
                                <label htmlFor="icon-button-file">
                                    <img src={nft.detailImg} className={classes.img} alt="detailimg"/>
                                </label> */}
                            </div>)
                            :
                            (<div className={classes.img}>
                                <input accept="image/*" className={classes.imginput} id="icon-button-file" type="file" name="detail" onChange={handledetailimg}/>
                                <label htmlFor="icon-button-file">
                                    <IconButton color="primary" aria-label="upload picture" component="span">
                                    <PhotoCamera />
                                    </IconButton>
                                </label>
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

                    <TextField 
                    label="Sport"
                    onChange={handleNFTsport}
                    className={classes.input}/><br/>

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
                </form>
                <div className={classes.submitBtn}>
                <SubmitBtn value={"Upload"} onClick={handleSubmit}></SubmitBtn>
                </div>
            </Paper>
        </div>
    )
}
