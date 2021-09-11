import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import UserSearch from '../../components/UserSearch';
import Paper from '@material-ui/core/Paper';
import UserList from './UserList';

const useStyles = makeStyles((theme) => ({
    search: {
        marginRight: theme.spacing(3),
        height:"10vh",
        marginBottom:"20px",
        padding:"30px"
      },
      list: {
        marginRight: theme.spacing(3),
        padding:"30px"
      },
  }));
export default function UserPage() {
    const classes = useStyles()
    const [sport, setSport] = React.useState('');

    console.log(sport)
    const handleChange = (event) => {
        setSport(event.target.value);
    };
    return (
        <div>
            <Paper className={classes.search}>
                <UserSearch handleChange={handleChange} sport={sport}></UserSearch>
            </Paper>
            <Paper className={classes.list}>
                <UserList></UserList>
            </Paper>
        </div>
    )
}
