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

export default function PaymentItem(props) {
    const { row } = props;
    const user = row.user
    const NFT = row.NFT
    const [open, setOpen] = React.useState(false);
    const [memo,setMemo] = React.useState(row.memo)
    
    const handleMemo=(e)=>{
        setMemo(e.target.value)
    }

    const handleEdit=(e)=>{
        row.memo=memo
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
            {user.name}
          </TableCell>
          <TableCell align="right">{NFT.title}</TableCell>
          <TableCell align="right">{row.paymentnum}</TableCell>
          <TableCell align="right">{row.date}</TableCell>
          <TableCell align="right">{row.memo?"Y":"N"}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  주문자
                </Typography>
                <div>
                    <li>Name : {user.name}</li>
                    <li>E-mail : {user.email}</li>
                    <li>Dialog : {user.dialog}</li>
                </div>
                <br/>
                <Typography variant="h6" gutterBottom component="div">
                  상품명
                </Typography>
                <div>
                    <li>Title : {NFT.title}</li>
                    <li>Count : {NFT.count}</li>
                </div>
                <br/>
                <Typography variant="h6" gutterBottom component="div">
                  Memo
                </Typography>
                <TextareaAutosize
                    aria-label="minimum height"
                    defaultValue={row.memo}
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
