import React, { useState, useEffect } from 'react'

import { mainColor } from '../../assets/colors'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AdAddModal from './AdvertisementAddModal';
import AdsList from './AdvertisementList';
import { Modal } from '@material-ui/core';
import { TextField } from '@mui/material';

import { addads, getproductsByPage } from '../../api/API';

const useStyles = makeStyles(() => ({
    paper: {
        padding : '30px',
        display: 'flex',
        flexDirection : 'column',
    },

    title: {
        fontSize : '20px',
        fontWeight : 'bold'
    },

    icon:{
        color : mainColor,
        fontSize : '35px',
    },

    float_right:{
        float : 'right',
        marginTop : '-16px',
        marginBottom : '-12px'
        
    },

    searchBar : {
        width: '90%',
        margin:'30px 0 50px 20px'
    },

    searchPaper : {
        padding : '20px 0 40px 30px',
        marginBottom : '20px'
    }

}));



export default function AdvertisementPage() {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const data = {
        description : '',
        productsId : '',
        url : ''
    }
    const [AdsData, setAdsData] = useState(data);
    const [ProductsData, setProductsData] = useState([]);
    
    
    const onCreate = () => {
        setOpen(false);

        const form = new FormData();
        form.append('description', AdsData.description);
        form.append('productsId', AdsData.productsId);
        form.append('url', AdsData.url);

        addads(form)
         .then(res => {
            window.location.replace('/home/advertisement')
            alert('ADD SUCCESS - Advertisement')
            console.log('Ads Create success')
         })
         .catch(err => console.log(err))
        
         setAdsData(data);
    }

    useEffect(() => {
        getproductsByPage({page:1, size:100})
         .then(res => setProductsData(res.data.data.list))
         .catch(err => console.log(err))
    }, [])

    const handleChange = (e) => {
      
    }




    return (
        <div>
            <Paper className={classes.searchPaper}>
                <TextField className={classes.searchBar} label="검색" variant="standard" ></TextField>
            </Paper>


            <Paper className={classes.paper}>
                <div>
                    <span className={classes.title}>현재 광고 조회 </span>
                    <span className={classes.float_right}>
                    <IconButton onClick={handleOpen}>
                    <AddCircleIcon className={classes.icon}></AddCircleIcon>
                    </IconButton>
                    </span>
        
                    <AdsList ></AdsList>
                    
                    <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby='modal-modal-title'
                    aria-describedby='modal-modal-description'>

                        <AdAddModal
                            onCreate={onCreate}
                            ProductsData={ProductsData}
                            // onChange={onChange}
                        ></AdAddModal>
                    </Modal>

                </div>
               
            </Paper>

            
        </div>
    )
}
