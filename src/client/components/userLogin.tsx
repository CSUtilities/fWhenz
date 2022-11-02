//dependencies
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Api from './Api';

//redux
import { useAppSelector, useAppDispatch } from '../redux/hooks';
const dispatch = useAppDispatch();
import { assignUser, removeUser } from '../redux/userSlice';

const Login = () => {
  const user = useAppSelector(state=>state.user.value);

  // const navigate = useNavigate();
  // const [password, setPassword] = useState(null);
  // const [invalidEntry, setInvalidEntry] = useState(false);
  // const [invalidLogin, setInvalidLogin] = useState(false);

  // const handleUsernameInput = (e) => {
  //   console.log(e.target.value);
  //   setUsername(e.target.value);
  // };

  // const handlePasswordInput = (e) => {
  //   console.log(e.target.value);
  //   setPassword(e.target.value);
  // };

  // const handleLogInButton = async (e) => {
  //   if (!user || !password) {
  //     setInvalidLogin(false);
  //     return setInvalidEntry(true);
  //   }

  //   const payload = { user: user, password: password };
  //   const response = await Api.login(payload);
  //   console.log(response);
  //   if (typeof response !== 'string') return setInvalidLogin(true);
  //   setUsername(response);
  //   return navigate('/');
  // }

  return (
    // <div className="login">
    //   <div className="logo">
    //     placeholder for logo
    //   </div>
    //   <div className="userButton">
    //     <input
    //       type = 'text'
    //       id='userTextBox'
    //       placeholder='Enter user name'
    //       required
    //       onChange={(e) => handleUsernameInput}
    //     >
    //     </input>
    //   </div>
    //   <div className="userButton">
    //     <input
    //       type = 'text'
    //       id='passwordTextBox'
    //       placeholder='Enter password'
    //       required
    //       onChange={(e) => handlePasswordInput}
    //     >
    //     </input>
    //   </div>
    // </div>
    <div>
      <h1>{user}</h1>
      <button onClick={()=>dispatch(assignUser(1))}>assign</button>
      <button onClick={()=>dispatch(removeUser())}>remove</button>
    </div>
  )
};

export default Login;