import React, { useRef } from 'react';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { assignUser } from '../redux/userSlice';

interface Props {
    setDisplay: React.Dispatch<React.SetStateAction<string>>,
    setUserId: React.Dispatch<React.SetStateAction<number>>,
    setNoUserAccount: (arg0: boolean) => void
  }

export default function SignUp(props: Props) {
  const user = useRef<HTMLInputElement>(null);
  const pass = useRef<HTMLInputElement>(null);
  const confirm = useRef<HTMLInputElement>(null);
  const userState = useAppSelector((state) => state.user.value);
  const dispatch = useAppDispatch();

  const addNewUser = (user: string, password: string, confirm: string) => {
    const checkDup = userState.reduce((result, obj) => user === obj.userName ? true : result, false);
    if (!checkDup){
      const newUserId = userState[userState.length-1].userId!+1;
      props.setUserId(newUserId);
      dispatch(assignUser({
        userId: newUserId,
        userName: user,
        password: password
      }));
      props.setDisplay('Dashboard');     
    }
  };

  return (
    <div>
      <h4>Sign Up</h4>
      <span>
        <label>Username</label>
        <input ref={user} id='user' type='text'></input>
      </span>
      <span>
        <label>Set Password</label>
        <input ref={pass} id='pass' type='password'></input>
      </span>
      <span>
        <label>Confirm Password</label>
        <input ref={confirm} id='confirm' type='password'></input>
      </span>
      <button onClick={()=>addNewUser(user.current!.value, pass.current!.value, confirm.current!.value)}
      >Log In</button>
      <p>Have an account? <a 
          href='#'
          onClick ={()=>props.setNoUserAccount(false)}>Sign up</a>
      </p>
    </div>
  )
}

