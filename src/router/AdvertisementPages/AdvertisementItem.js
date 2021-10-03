import React from 'react'
import AdsEdit from './AdvertisementEditModal';

import { Paper } from '@mui/material';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import { Modal } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    button:{
        width : '100px',
        margin : '5px',
    },

    item:{
        // item page
        margin : '30px 0 0 0',
        padding : '20px',
        fontWeight:"bold",
        fontSize:"15px",
    },

    data:{
        // 내용
        display : 'flex',
        alignItems : 'center',
    },

    img:{
        width : '150px',
        height : 'auto',
        margin : '0 30px 0 30px',
        borderRadius : '10px',
    },

    button_display:{
        marginRight : '10px',
        marginLeft : 'auto'
    },

    url_style:{
        width : '300px',
        fontSize : '11px',
        color : 'gray',
    },

    url_div : {
        width : '500px',
    }
}));






function AdvertisementItem(props) {
    const classes = useStyles();
    // const [ads,setAds] = React.useState(props.ads); 
    const [open, setOpen] = React.useState(false);
    const [AdsData, setAdsData] = React.useState(props.adsData);

    
    const handelOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    
    const handleDelete = () => {
        console.log('Ads delete success')
    };

    const handleEdit = () => {
        setOpen(false);
        console.log('Ads Edit success')
    }




        return (
            <div> 
             <ul>       
               <Paper className={classes.item}>
                   
                 <li style={{listStyle:'none'}}>

                    {/* 광고 */}
                    <div className={classes.data} >

                        <img src={AdsData.img} alt="adsimg" className={classes.img}></img>
                    <div className={classes.text_display}>
                            {AdsData.text}
                            <br /><br />

                        <div className={classes.url_div}>
                        <span className={classes.url_style} >
                            <a href={AdsData.url} target='_blank'>
                                {AdsData.url}
                            </a>
                        </span>
                        </div>

                    </div>
                   
                    {/* 버튼 */}
                    <div className={classes.button_display}>
                        <Button className={classes.button} color='primary' variant="outlined" onClick={handelOpen}>Edit</Button>
                        <Button className={classes.button} color='secondary' variant="outlined" onClick={handleDelete}>Delete</Button>
                    </div>
             </div>

         </li>
        
         </Paper>
            </ul>
            
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'>

                <AdsEdit
                    handleEdit = {handleEdit}
                />
            </Modal> 

                
            </div>

            
        )
    }

export default  AdvertisementItem;