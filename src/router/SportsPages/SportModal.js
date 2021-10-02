import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';

import { mainColor } from '../../assets/colors';
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
    width: 300,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  icon:{
    color:mainColor,
    fontSize:"35px"
  },
   modalContent:{
       margin:"30px"
   },
   modalBtn:{
    marginTop:"10vh",
    margin:"30px"
   },
   iconUrl:{
     width:"100px",
     marginBottom:"20px"
   }
}));

export default function SportModal(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const {name,iconUrl} = props.sport
  const modalbody = (
    <div style={modalStyle} className={classes.paper}>
        <div className={classes.modalContent}>
          {
            props.modalKind==="upload"?
            <></>
            :
            <img src={iconUrl} alt="icon"  className={classes.iconUrl}/>
            
          }
            <form noValidate autoComplete="off" >
                <TextField 
                  label="종목 이름" 
                  defaultValue={name}
                  onChange={props.handleChange}/>
            </form>
        </div>
            
      
        <form className={classes.modalContent}>
            <input accept="image/*" className={classes.input} type="file" onChange={props.handleImage} />
        </form>

        <div className={classes.modalBtn}>
          {
            props.modalKind==="upload"?
            <SubmitBtn value={"Upload"} onClick={props.handleUpload}></SubmitBtn>
            :
            <SubmitBtn value={"Update"} onClick={props.handleEdit}></SubmitBtn>
          }
        
        </div>
    </div>
  );

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
  );
}