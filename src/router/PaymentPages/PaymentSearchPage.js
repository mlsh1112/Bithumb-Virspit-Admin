import React from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import DateRangePicker from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
import {SubmitSmallBtn} from '../../components/SubmitBtn'


const useStyles = makeStyles((theme) => ({
    search: {
        marginRight: theme.spacing(3),
        marginBottom:"20px",
        padding:"30px"
      },
      datesearch:{
        marginBottom:"10px",
        display:"float"
      }
  }));

export default function PaymentSearchPage(props) {
    const classes = useStyles()

    return (
        <div>
            <Paper className={classes.search}>
                <div className={classes.datesearch}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateRangePicker
                            startText="결제 날짜 (start)"
                            endText="결제 날짜 (end)"
                            value={props.date}
                            onChange={props.handleSearchDate}
                            renderInput={(startProps, endProps) => (
                            <React.Fragment>
                                <TextField {...startProps} />
                                <Box sx={{ mx: 2 }}> to </Box>
                                <TextField {...endProps} />
                            </React.Fragment>
                            )}
                        />
                        
                        </LocalizationProvider>

                        <SubmitSmallBtn value={"search"} onChange={props.handleSubmit}></SubmitSmallBtn>
                    </div>
                </Paper>
        </div>
    )
}
