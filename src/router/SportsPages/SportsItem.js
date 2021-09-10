import React from 'react'
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import SportModal from './SportModal';
export default function SportsItem({sport}) {
    const {name,image} = sport
    const [open, setOpen] = React.useState(false)

    const handleDelete = () =>{

    }

    const handleEdit = () =>{
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false);
      }

    return (
        <li style={{fontWeight:"bold"}}>
            <div style={{flex:"inline-block",margin:"30px"}}>
                {name}
                <Button color="secondary" style={{float: "right"}} onClick={handleDelete}>Delete</Button>
                <Button color="primary"  style={{float: "right"}} onClick={handleEdit}> Edit </Button>
                <SportModal 
                    openModal={open} 
                    handleClose={handleClose}
                    modalKind={"update"}
                    sport={sport} >
                </SportModal>
            </div>
        </li>
    )
}
