import React from 'react'
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import {getproductById ,editordermemo} from '../../api/API'

export default function PaymentItem(props) {
    const { payment } = props
    const [open, setOpen] = React.useState(false)
    const [user,setUser] = React.useState(payment.member)
    const [memo,setMemo] = React.useState(payment.memo)
    const [nft,setNFT] = React.useState(payment.product)

    const handleMemo=(e)=>{
        setMemo(e.target.value)
    }

    const handleEdit=(e)=>{
      const data = {
          memo:memo,
          orderId:payment.id
      }
      editordermemo(data)
      .then(res=>console.log(res.data))
      .catch(err=>console.log(err))

      window.location.replace("/home/payment")
    }
    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {user.memberName}
          </TableCell>
          <TableCell >{nft.title}</TableCell>
          {/* <TableCell >{"payment number"}</TableCell> */}
          <TableCell >{payment.orderDate}</TableCell>
          <TableCell>{payment.memo?"Y":"N"}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  주문자
                </Typography>
                <div>
                    <li>Name : {user.memberName}</li>
                    <li>E-mail : {user.email}</li>
                    <li>Dialog : {user.phoneNumber}</li>
                </div>
                <br/>
                <Typography variant="h6" gutterBottom component="div">
                  상품명
                </Typography>
                <div>
                    <li>Title : {nft.title}</li>
                    <li>Price : {nft.price}</li>
                </div>
                <br/>
                <Typography variant="h6" gutterBottom component="div">
                  Memo
                </Typography>
                <TextareaAutosize
                    aria-label="minimum height"
                    defaultValue={payment.memo}
                    minRows={4}
                    placeholder="Write Memo"
                    style={{ width: 600 }}
                    onChange={handleMemo}
                />
                <br/>
                <Button variant="outlined" onClick={handleEdit}>Edit memo</Button>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
}
