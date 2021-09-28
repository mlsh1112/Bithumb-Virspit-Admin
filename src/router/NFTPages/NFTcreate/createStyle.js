import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    createPage:{
        marginRight: theme.spacing(3),
        marginTop: theme.spacing(3),
        padding:"40px"
    },
    input:{
        width:'100vh',
        marginBottom:'40px'
    },
    imgupload:{
        display:'flex',

    },
    img:{
        marginLeft:'100px',
        backgroundColor:"#eee",
        borderRadius:"10px",
        width:"200px",
        height:"250px",
        },
    imginput:{
        display:'none'
    },
    submitBtn:{
        display:'flex',
        justifyContent:"center"
    },
    sportSelect:{
        width:"200px",
    },
    playerSelect:{
        width:"400px",
    }
  }));

export default useStyles