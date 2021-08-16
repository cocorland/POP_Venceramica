import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import Routes from './routes/Routes';
import './css/estilos.css';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider 
      domain="dev-tz3czku2.us.auth0.com" 
      clientId="nkPU8SOAgkKwb0Q0tYQx88tyKaSs17Hg" 
      redirectUri={window.location.origin}
    >
      <Routes />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


