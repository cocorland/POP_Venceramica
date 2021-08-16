import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export const Perfil = () => {
    const {user, isAuthenticated, isLoading} = useAuth0();
    const classes = useStyles();
    
    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
      
      isAuthenticated && (
        <div>
          <br />
          <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
              <p>Email: {user.email}</p>
              <a href="./pdf" target="_blank"> 
                <div className={classes.root}>
                  <Button variant="contained" color="primary">
                    Ir a PDF
                  </Button>
                </div>
              </a>
        </div>
    )
  );
};


