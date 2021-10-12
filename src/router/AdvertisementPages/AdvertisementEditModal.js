
import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Select, MenuItem } from '@material-ui/core';
import {SubmitBtn} from '../../components/SubmitBtn';

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
    },
    select:{
        width : '100%',
        marginTop : '10px'
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





export default function AdvertisementEditModal(props){
    const classes = useStyles()
    const {description, url} = props.AdsData
    const [ProductsData, SetProductsData] = useState(props.ProductsData);


        return (
            <div>
                <Box sx={style}>

                    <Typography id="modal-modal-title" variant="h6" style={{fontWeight:'bold'}}>
                        현재 광고 수정
                    </Typography>
                            
                            <Typography>
                                <ul style={{fontWeight:'bold'}}>
                                <li style={{marginTop : '40px'}}> 종목 </li>
                                <Select className={classes.select} displayEmpty>
                                {ProductsData.map((products, i) => (
                                    <MenuItem key={i} value={products.id}>
                                        {products.title}
                                    </MenuItem>
                                ))
                                }
                                </Select>

                                <li style={{marginTop : '40px'}}> 설명 </li>
                                <TextField className={classes.input} defaultValue={description} margin="dense" ></TextField>

                                <li style={{marginTop : '20px'}}> URL </li>
                                <TextField className={classes.input} defaultValue={url} margin="dense" ></TextField>


                                </ul>
                                <div style={{textAlign : 'center', marginTop : '50px'}}>
                                <SubmitBtn value={"Update"} onClick={props.handleEdit}></SubmitBtn>
                                </div>
                            </Typography>
                            

                        </Box>
            </div>
        )
    
}
