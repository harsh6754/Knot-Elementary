import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import logo from '../assets/logo.svg';
import backgroundImage from '../assets/vector.png';
import './LoginButton.css';

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <>
        <nav className='navigation'>
          <img src={logo} alt="logo" />
          <button className='login-btn' onClick={() => loginWithRedirect()}>
            Log In
          </button>
        </nav>
        
        <main className="main-container">
          <div className="card">
            <div className="card-text">
              <h1 className="card-description-top">Schedule With Ease</h1>
              <h1 className="card-description-top">Meet your child's teacher and track their grades.</h1>
              <h3 className="card"></h3>
            </div>

            <div>
              <img className="card-img" src={backgroundImage} alt="background" />
            </div>
          </div>
          
        </main>
        
        <footer>
          <h1>Made for Educate Hacks 2023</h1>
          <h4>Akshita, Cecil, Emma, Mike</h4>
        </footer>
      </>
    )
  )
}

export default LoginButton;





