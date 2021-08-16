import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { LoginButton } from './Login';
import { LogoutButton } from './Logout';
import { Perfil } from './Perfil';

/* ultima version estable */
function App() {
  const {isAuthenticated} = useAuth0();
  return (
    
    <div style={{textAlign: 'center'}}>
      {isAuthenticated ? (
          <>
              <Perfil/>
              <LogoutButton/>
          </>
        ) : (
        <LoginButton/> 
      )}
    </div>
  );
}

export default App;