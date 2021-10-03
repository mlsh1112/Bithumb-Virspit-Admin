import React,{useState} from 'react'
import Button from '@material-ui/core/Button';
import SportModal from './SportModal';
import { editsport,deletesport } from '../../api/API';
export default function SportsItem(props) {
    const [sport,setSport] = useState(props.sport)
    const [open, setOpen] = React.useState(false)
    const fReader = new FileReader();
    const handleDelete = () =>{
        deletesport(sport.id)
        .then(res=>console.log("DELETE SUCCESS - SPORT"))
        .catch(err=>console.log(err))
    }
    const handleOpen = () =>{
        setOpen(true)
    }
    const handleEdit = () =>{
        editsport(sport.id,JSON.stringify(sport))
        .then(res=>console.log("UPDATE SUCCESS"))
        .catch(err=>console.log(err))
        console.log(sport.id,JSON.stringify(sport))
        setOpen(false)
    }
    const handleClose = () => {
        setOpen(false);
    }
    const handleImage = (e) =>{
        fReader.readAsDataURL(e.target.files[0]);
        fReader.onloadend = function(event){
            setSport({
                ...sport,
                iconUrl:event.target.result
            })
        }
        
    }

    const handleChange = (e) => {
        setSport({
            ...sport,
            name:e.target.value
        })
    };

    return (
        <li style={{fontWeight:"bold"}}>
            <div style={{flex:"inline-block",margin:"30px"}}>
                {sport.name}
                <Button color="secondary" style={{float: "right"}} onClick={handleDelete}>Delete</Button>
                <Button color="primary"  style={{float: "right"}} onClick={handleOpen}> Edit </Button>
                <SportModal 
                    openModal={open} 
                    handleClose={handleClose}
                    handleEdit={handleEdit}
                    handleChange={handleChange}
                    handleImage={handleImage}
                    modalKind={"update"}
                    sport={sport} >
                </SportModal>
            </div>
        </li>
    )
}
