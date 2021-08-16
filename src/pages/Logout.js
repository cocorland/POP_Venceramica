import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export const LogoutButton = () => {
    const { logout } = useAuth0();
    const classes = useStyles();

    return (
    	<div className={classes.root}> 
        <Button variant="outlined" onClick={() => logout({ returnTo: window.location.origin })}>Log Out</Button>
      </div>
  	);
};
