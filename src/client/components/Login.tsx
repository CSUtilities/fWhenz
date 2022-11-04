//dependencies
import React from 'react';
import { useAppDispatch } from '../redux/hooks';
import { assignUser } from '../redux/userSlice';

export default function Login(props: { setDisplay: React.Dispatch<React.SetStateAction<string>>}){
  const setDisplay = props.setDisplay;
  const dispatch = useAppDispatch();

  return (
    <div>
      <h4>Log In</h4>
      <span>
        <label>Username</label>
        <input type='text'></input>
      </span>
      <span>
        <label>Password</label>
        <input type='password'></input>
      </span>
      <button onClick={()=>{
        dispatch(assignUser(1));
        setDisplay('Dashboard');
        }
      }>Log In</button>
      <p>Need an account? <a href=''>Sign up</a>
      </p>
    </div>
  )
};