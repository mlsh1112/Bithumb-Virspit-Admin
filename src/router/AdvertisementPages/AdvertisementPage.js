import React from 'react'
import { mainColor } from '../../assets/colors'
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import AdAddModal from './AdvertisementAddModal';
import AdsList from './AdvertisementList';
import { Modal} from '@mui/material';


const useStyles = makeStyles((theme) => ({
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

}));






export default function AdvertisementPage(props) {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const onCreate = () => {
        setOpen(false);
        console.log('Ads Create success')
    }
    



    return (
        <div>
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
                            // onChange={onChange}
                            // img={img}
                            // text={text}
                            // url={url}
                        ></AdAddModal>
                    </Modal>

                </div>
               
            </Paper>

            
        </div>
    )
}
