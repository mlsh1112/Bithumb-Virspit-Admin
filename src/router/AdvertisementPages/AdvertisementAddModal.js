import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import SubmitBtn from '../../components/SubmitBtn';

const useStyles = makeStyles((theme) => ({
    label:{
        background : '#CACACA',
        width : '500px',
        textAlign : 'center',
        padding: '120px 0px',
        marginTop : '30px'
    },
    input:{
        width : '430px',
    }
}));

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'white',
    boxShadow: '0 0 3px 0.1px',
    height : 'auto',
    p: 4,
  };


  

//{img, text, url, onDataChange, onCreate}
export default function AdvertisementAddModal(props){
    const classes = useStyles()

        return (
            <div>
                <Box sx={style}>


                    <Typography id="modal-modal-title" variant="h6" style={{fontWeight:'bold'}}>
                        현재 광고 등록 
                    </Typography>

                    <form autoComplete="off" noValidate>
                        <div style={{textAlign:'center', padding:'30px 0 0 15%'}}>
                            <input 
                                type='file'
                                id='upload'
                                accept='image/*'
                                name='UploadImage'
                                value={props.img}
                            />
                                
                        </div>
                            
                        <Typography>
                                
                            <ul style={{fontWeight:'bold'}}>

                            <li style={{marginTop : '40px'}}> 설명 </li>
                            <TextField 
                                className={classes.input} 
                                margin="dense" 
                                name='text' 
                                placeholder='광고 설명'
                                onChange={props.onChange}
                                value={props.text}
                            >
                            </TextField>

                            <li style={{marginTop : '20px'}}> URL </li>
                            <TextField 
                                className={classes.input} 
                                margin="dense"
                                name='url'
                                placeholder='광고 URL'
                                onChange={props.onChange}
                                value={props.url}
                            >
                            </TextField>
                            </ul>
                                

                                
                            <div style={{textAlign : 'center', marginTop : '50px'}}>
                            <SubmitBtn 
                                value={"Update"}
                                onClick={props.onCreate}>
                            </SubmitBtn>
                            </div>

                        </Typography>
                            
                    </form>
                </Box>
            </div>
        )
    
}
