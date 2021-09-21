import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PaymentItem from './PaymentItem';

  const rows=[
      {user:{name:"kim",email:"kim@naver.com",dialog:"010-1234-5678"},
       NFT:{title:"my sport1",count:1}, paymentnum:"3049290", date:"2021-09-02",memo:''},

      {user:{name:"lee",email:"lee@naver.com",dialog:"010-1234-5678"},
      NFT:{title:"my sport2",count:2}, paymentnum:"3049290", date:"2021-09-02",memo:'she is lee.'},

      {user:{name:"jun",email:"jun@naver.com",dialog:"010-1234-5678"},
      NFT:{title:"my sport3",count:3},title:"My sport3", paymentnum:"3049290", date:"2021-09-02",memo:''},

      {user:{name:"alia",email:"alia@naver.com",dialog:"010-1234-5678"},
      NFT:{title:"my sport4",count:4},title:"My sport4", paymentnum:"3049290", date:"2021-09-02",memo:''},
      
      {user:{name:"bob",email:"bob@gmail.com",dialog:"010-1234-5678"},
      NFT:{title:"my sport5",count:5},title:"My sport5", paymentnum:"3049290", date:"2021-09-02",memo:'kimlim'},
  ]
export default function PaymentList() {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                <TableRow>
                    <TableCell />
                    <TableCell>주문자</TableCell>
                    <TableCell align="right">NFT</TableCell>
                    <TableCell align="right">주문번호</TableCell>
                    <TableCell align="right">주문일자</TableCell>
                    <TableCell align="right">메모</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row,i) => (
                    <PaymentItem key={i} row={row} />
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
