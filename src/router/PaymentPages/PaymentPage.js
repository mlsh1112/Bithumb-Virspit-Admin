import React from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PaymentSearchPage from './PaymentSearchPage'
import PaymentList from './PaymentList';
const useStyles = makeStyles((theme) => ({
    search: {
        marginRight: theme.spacing(3),
        marginBottom:"20px",
        padding:"30px"
      },
      list: {
        marginRight: theme.spacing(3),
        padding:"30px"
      },
      nftsearch:{
          width:"120vh",
          marginTop:"30px"
      }
  }));
export default function PaymentPage() {
    const classes = useStyles()
    

    return (
        <div>
            <PaymentSearchPage></PaymentSearchPage>
            <PaymentList></PaymentList>
        </div>
    )
}
