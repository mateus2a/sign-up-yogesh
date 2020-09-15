import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="login">
        <div className="social-medias"></div>
        <form>
          <input type="email" name="emal" id="email"/>
          <input type="password" name="password" id="password"/>
          <a href="#"> I forgot my password</a>
          <button>Login</button>
          <div className="line"></div>
          <button>Create new account</button>
        </form>
      </div>
    </div>
  );
}

export default App;
