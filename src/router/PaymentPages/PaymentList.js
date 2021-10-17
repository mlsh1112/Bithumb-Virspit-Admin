import React,{useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PaymentItem from './PaymentItem';
import { getorder } from '../../api/API';

export default function PaymentList(props) {
    
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                <TableRow>
                    <TableCell/>
                    <TableCell>주문자</TableCell>
                    <TableCell >NFT</TableCell>
                    <TableCell >주문일자</TableCell>
                    <TableCell >메모</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {props.payment.map((payment,i) => (
                            <PaymentItem key={i} payment={payment} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
