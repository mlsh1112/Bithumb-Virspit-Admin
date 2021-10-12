import React,{useState} from 'react'
import Button from '@material-ui/core/Button';
import SportModal from './SportModal';
import { editsport,deletesport } from '../../api/API';
export default function SportsItem(props) {
    const [sport,setSport] = useState(props.sport)
    const [editedSport,setEditsport] = useState({
        name:props.sport.name,
        iconUrl:""
    })
    const [open, setOpen] = React.useState(false)
    const handleDelete = () =>{
        deletesport(sport.id)
        .then(res=>{
            alert("DELETE SUCCESS - SPORT")
            window.location.replace("/home")
        })
        .catch(err=>alert(err.response.data.message))
    }
    const handleOpen = () =>{
        setOpen(true)
    }
    const handleEdit = () =>{
    console.log(editedSport)
        const form = new FormData();
        
        form.append("name", editedSport.name);
        if(editedSport.iconUrl)
            form.append("iconFile", editedSport.iconUrl);
        form.append("id", sport.id);

        editsport(sport.id,form)
        .then(res=>{
            alert("UPDATE SUCCESS")
            window.location.replace("/home")
        })
        .catch(err=>{
            alert(err.response.data.message)
            window.location.replace("/home")
        })

        setOpen(false)
    }
    const handleClose = () => {
        setOpen(false);
    }
    const handleImage = (e) =>{
        setEditsport({
            ...editedSport,
            iconUrl:e.target.files[0]
        })
        
    }

    const handleChange = (e) => {
        setEditsport({
            ...editedSport,
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
