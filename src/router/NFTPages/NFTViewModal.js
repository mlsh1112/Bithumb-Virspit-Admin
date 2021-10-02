import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import SubmitBtn from '../../components/SubmitBtn';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';

function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 700,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(3, 4, 3),
      fontWeight:"bold",
      fontSize:'15px'
      
    },
    info:{
        display:"flex",
        margin:"30px",
        marginBottom:"40px"
    },
    img:{
        width:300,
        marginRight:"20px"
    },
    submitBtn:{
        display:'flex',
        justifyContent:"center"
    },
  }));
export default function NFTViewModal(props) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const nft = props.nft
    const name = props.name

    const modalbody=(
        <div style={modalStyle} className={classes.paper}>
            <div className={classes.info}>
                <div>
                    NFT Image<br/>
                    <img src={nft.nftImageUrl} alt="nftImageUrl" className={classes.img}></img><br/>
                    Detail Image<br/>
                    <img src={nft.detailImageUrl} alt="detailImageUrl" className={classes.img}></img>
                </div>
                <ul>
                    <p>
                        <li>Title : {nft.title} </li>
                        <li>Name : {name}</li>
                        <li>Sport : {nft.sport}</li>
                        <li>Describtion : {nft.description}</li>
                    </p>

                    <p>
                        <li>Price : {nft.price} </li>
                        <li>Count : {nft.count}</li>
                        <li>StartDate : {nft.startDateTime}</li>
                    </p>

                    <p>
                        <li>Exhibition : {nft.exhibition?'Y':'N'} </li>
                        <li>Sold out : {nft.count<=0?'Y':'N'}</li>
                    </p>
                </ul>
            </div>
            <div className={classes.submitBtn}>
                <SubmitBtn value={"Edit"} onClick={props.handleEdit}></SubmitBtn>
            </div>

        </div>
    )

    const editTime = (nft.startDateTime).split(" ").join("T")
    const editmodalbody=(
        <div style={modalStyle} className={classes.paper}>
            <div className={classes.info}>
                <div>
                    NFT Image<br/>
                    <form>
                        <input accept="image/*" className={classes.imginput} id="icon-button-file" type="file" name="nft" onChange={props.handleNFTimg} />
                        <label htmlFor="icon-button-file">
                            <img src={nft.nftImageUrl} className={classes.img} alt="nftImageUrl"/>
                        </label>
                    </form>
                    <br/>
                    Detail Image<br/>
                    <form>
                        <input accept="image/*" className={classes.imginput} id="icon-button-file" type="file" name="detail" onChange={props.handleDetailimg} />
                        <label htmlFor="icon-button-file">
                            <img src={nft.detailImageUrl} className={classes.img} alt="detailImageUrl"/>
                        </label>
                    </form>
                </div>
                <form noValidate autoComplete="off">
                    <TextField 
                    label="Title"
                    defaultValue={nft.title}
                    onChange={props.handleNFTtitle}
                    className={classes.input}/><br/>

                    <TextField 
                    label="Name"
                    defaultValue={name}
                    onChange={props.handleNFTname}
                    className={classes.input}/><br/>

                    <TextField 
                    label="Sport"
                    defaultValue={nft.sport}
                    onChange={props.handleNFTsport}
                    className={classes.input}/><br/>

                    <TextField 
                    label="Describtion"
                    defaultValue={nft.description}
                    onChange={props.handleNFTdescribe}
                    className={classes.input}/><br/>

                    <TextField 
                    label="Price"
                    defaultValue={nft.price}
                    onChange={props.handleNFTprice}
                    className={classes.input}/><br/>


                    <TextField 
                    label="Count"
                    defaultValue={nft.count}
                    onChange={props.handleNFTcount}
                    className={classes.input}/>

                    <TextField
                    id="datetime-local"
                    label="Start Date"
                    type="datetime-local"
                    defaultValue={editTime}
                    sx={{ width: 300 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={props.handleStartdate}
                        />

                    <div>
                        &nbsp;Exhibition &nbsp;&nbsp;&nbsp;&nbsp;
                        <Checkbox
                            checked={nft.exhibition}
                            onChange={props.handleExhibition}
                            color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox'  }}
                        />
                    </div>
                </form>
            </div>
            <div className={classes.submitBtn}>
                <SubmitBtn value={"Update"} onClick={props.handleUpdate}></SubmitBtn>
            </div>
        </div>
    )


    return (
        <div>
            <Modal
              open={props.openModal}
              onClose={props.handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
                {props.edit?
                editmodalbody
                :
                modalbody
                }
          </Modal>
        </div>
    )
}
