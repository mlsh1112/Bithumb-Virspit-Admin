import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import SubmitBtn from '../../components/SubmitBtn';

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
      width: 600,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(3, 4, 3),
      fontWeight:"bold",
      fontSize:'15px'
      
    },
    info:{
        display:"flex",
        margin:"20px",
        marginBottom:"40px"
    },
    img:{
        width:300
    },
    submitBtn:{
        display:'flex',
        justifyContent:"center"
    }
  }));
export default function NFTViewModal(props) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const nft = props.nft

    const modalbody=(
        <div style={modalStyle} className={classes.paper}>
            <div className={classes.info}>
                <img src={nft.img} alt="nftimg" className={classes.img}></img>
                <ul>
                    <p>
                        <li>Title : {nft.title} </li>
                        <li>Name : {nft.name}</li>
                        <li>Sport : {nft.sport}</li>
                    </p>

                    <p>
                        <li>Price : {nft.price} </li>
                        <li>Count : {nft.count}</li>
                        <li>StartDate : {nft.startDate}</li>
                    </p>

                    <p>
                        <li>Exhibition : {nft.exhibition?'Y':'N'} </li>
                        <li>Sold out : {nft.soldout?'Y':'N'}</li>
                    </p>
                </ul>
            </div>
            <div className={classes.submitBtn}>
                <SubmitBtn value={"Edit"} onClick={props.handleEdit}></SubmitBtn>
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
              {modalbody}
          </Modal>
        </div>
    )
}
