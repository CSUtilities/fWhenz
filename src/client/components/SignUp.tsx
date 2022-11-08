import React from 'react';
import { useAppDispatch } from '../redux/hooks';
import { assignUser } from '../redux/userSlice';

interface Props { 
  setDisplay: (arg0: string) => void,
  setNoUserAccount: (arg0: boolean) => void
}

export default function SignUp(props: Props) {
  const dispatch = useAppDispatch();
  return (
    <div>
      <h4>Sign Up</h4>
      <span>
        <label>Username</label>
        <input type='text'></input>
      </span>
      <span>
        <label>Set Password</label>
        <input type='password'></input>
      </span>
      <span>
        <label>Confirm Password</label>
        <input type='password'></input>
      </span>
      <button onClick={()=>{
        dispatch(assignUser(1));
        props.setDisplay('Dashboard');
        }
      }>Log In</button>
      <p>Have an account? <a 
          href='#'
          onClick ={()=>props.setNoUserAccount(false)}>Sign up</a>
      </p>
    </div>
  )
}

