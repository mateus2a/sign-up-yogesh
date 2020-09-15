import React from 'react';

import './App.css';
import './global.css';

import Twitter from '@material-ui/icons/Twitter';
import Facebook from '@material-ui/icons/Facebook';

function App() {
  return (
    <div className="App">
      <div className="login">

        <div className="login-wrapper">
          <div className="social-medias">
            <div className="social-wrapper">
              <Facebook color="primary" className="fb" style={{ fontSize: 80 }}/>

              <Twitter color="primary" className="tw" style={{ fontSize: 80 }} />
            </div>
          </div>

          <form>
            <input type="email" name="emal" id="email" placeholder="Email"/>
            <input type="password" name="password" id="password" placeholder="Password"/>
            <a href="#">I  forgot my password?</a>
            <button className="button-login">Login</button>
            <div className="line"></div>
            <button className="create-account">Create new account</button>
          </form>

          </div>
      </div>
      </div>
  );
}

export default App;
