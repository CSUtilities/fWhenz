import React, { useState, useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
import Api from './Api';

const Login = () => {
  const navigate = useNavigate();
  const [user, setUsername] = useContext(UserContext);
  const [password, setPassword] = useState(null);
  const [invalidEntry, setInvalidEntry] = useState(false);
  const [invalidLogin, setInvalidLogin] = useState(false);

  const handleUsernameInput = (e) => {
    console.log(e.target.value);
    setUsername(e.target.value);
  };

  const handlePasswordInput = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  const handleLogInButton = async (e) => {
    if (!user || !password) {
      setInvalidLogin(false);
      return setInvalidEntry(true);
    }

    const payload = { user: user, password: password };
    const response = await Api.login(payload);
    console.log(response);
    if (typeof response !== 'string') return setInvalidLogin(true);
    setUsername(response);
    return navigate('/');
  }

  return (
    <div className="login">
      <div className="logo">
        placeholder for logo
      </div>
      <div className="userButton">
        <input
          type = 'text'
          id='userTextBox'
          placeholder='Enter user name'
          required
          onChange={(e) => handleUsernameInput}
        >
        </input>
      </div>
      <div className="userButton">
        <input
          type = 'text'
          id='passwordTextBox'
          placeholder='Enter password'
          required
          onChange={(e) => handlePasswordInput}
        >
        </input>
      </div>
    </div>
  )
};

export default Login;