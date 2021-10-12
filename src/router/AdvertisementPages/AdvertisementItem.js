
import React, {useState, useEffect} from 'react'

import { Paper } from '@mui/material';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import { Modal } from '@material-ui/core';
import AdsEdit from './AdvertisementEditModal';
import { getads, editads, deleteads, getproductsByPage } from '../../api/API';



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
    const [AdsData, setAdsData] = useState(props.adsData);
    const [ProductsData, setProductsData] = useState([]);


    const handelOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        getproductsByPage({page:1, size:100})
         .then(res => setProductsData(res.data.data.list))
        //  .then(res => console.log('res', res.data.data.list))
         .catch(err => console.log(err))
    }, [])

    
    const handleDelete = () => {
        deleteads(AdsData.id)
         .then(res => {
             window.location.replace('/home/advertisement')
             alert('DELETE SUCCESS - Advertisement')
             console.log('Ads delete success')
            })
         .catch(err => console.log(err))

        

    };

    const handleEdit = () => {
        setOpen(false);

        const form = new FormData();
        form.append('description', AdsData.description);
        form.append('productId', AdsData.productId);
        form.append('url', AdsData.url);

        
        editads(AdsData.id, form)
         .then(res => {
            window.location.replace('/home/advertisement')
            alert('UPDATE SUCCESS - Advertisement')
            console.log('Ads Edit success')
         })
         .catch(err => console.log(err))

    }




        return (
            <div> 
             <ul>       
               <Paper className={classes.item}>
                   
                 <li style={{listStyle:'none'}}>

                    {/* 광고 */}
                    <div className={classes.data} >
                    <div className={classes.text_display}>
                            {AdsData.description}
                        <div className={classes.url_div}>
                        <span className={classes.url_style} >
                                <br />
                                ProductId : {AdsData.product.id}
                                <br />
                            <a href={AdsData.url} target='_blank'>
                                url : {AdsData.url}
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
                    AdsData = {AdsData}
                    ProductsData={ProductsData}

                />
            </Modal> 

                
            </div>

            
        )
    }

export default  AdvertisementItem;