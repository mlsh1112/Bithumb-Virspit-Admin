import React from 'react'
import Button from '@material-ui/core/Button';
import SportModal from './SportModal';
export default function SportsItem({sport}) {
    const {name,image} = sport
    const [open, setOpen] = React.useState(false)
    const [keyword,setKeyword] = React.useState("")
    const handleDelete = () =>{

    }
    const handleOpen = () =>{
        setOpen(true)
    }
    const handleEdit = () =>{
        console.log(keyword)
        setOpen(false)
    }
    const handleClose = () => {
        setOpen(false);
    }

    const handleChange = (event) => {
        setKeyword(event.target.value);
    };

    return (
        <li style={{fontWeight:"bold"}}>
            <div style={{flex:"inline-block",margin:"30px"}}>
                {name}
                <Button color="secondary" style={{float: "right"}} onClick={handleDelete}>Delete</Button>
                <Button color="primary"  style={{float: "right"}} onClick={handleOpen}> Edit </Button>
                <SportModal 
                    openModal={open} 
                    handleClose={handleClose}
                    handleEdit={handleEdit}
                    handleChange={handleChange}
                    modalKind={"update"}
                    sport={sport} >
                </SportModal>
            </div>
        </li>
    )
}
