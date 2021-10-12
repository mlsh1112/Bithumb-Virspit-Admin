import React,{useState} from 'react'
import Button from '@material-ui/core/Button';
import SportModal from './SportModal';
import { editsport,deletesport } from '../../api/API';
export default function SportsItem(props) {
    const [sport,setSport] = useState(props.sport)
    const [open, setOpen] = React.useState(false)
    const handleDelete = () =>{
        deletesport(sport.id)
        .then(res=>{
            alert("DELETE SUCCESS - SPORT")
            window.location.replace("/home")
        })
        .catch(err=>console.log(err))
    }
    const handleOpen = () =>{
        setOpen(true)
    }
    const handleEdit = () =>{
    console.log(sport)
        const form = new FormData();
        form.append("name", sport.name);
        form.append("iconFile", sport.iconUrl);
        form.append("id", sport.id);

        editsport(sport.id,form)
        .then(res=>{alert("UPDATE SUCCESS")
        window.location.replace("/home")
        })
        .catch(err=>console.log(err))

        setOpen(false)
    }
    const handleClose = () => {
        setOpen(false);
    }
    const handleImage = (e) =>{
        setSport({
            ...sport,
            iconUrl:e.target.files[0]
        })
        
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
