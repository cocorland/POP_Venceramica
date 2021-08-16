import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import logo from '../images/bathroom1.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    const classes = useStyles();
    

    return (
      <div className={classes.root}>
        <img src={logo} alt="logo" />
        <h1>Bienvenido al Sistema de Visualizacion de Archivos de Venceramica</h1>
        <Button variant="outlined" onClick={() => loginWithRedirect()}>Login</Button>
      </div>
    );
};

