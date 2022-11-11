import React, {useRef} from 'react';
import { useAppSelector, useAppDispatch } from '../redux/hooks';

interface Props {
    setDisplay: React.Dispatch<React.SetStateAction<string>>,
    setUserId: React.Dispatch<React.SetStateAction<number>>,
    setNoUserAccount: (arg0: boolean) => void
  }

export default function LogIn(props: Props) {
  const user = useRef<HTMLInputElement>(null);
  const pass = useRef<HTMLInputElement>(null);
  const userState = useAppSelector((state) => state.user.value);
  const dispatch = useAppDispatch();

  const verifyUser = (user: string, pass: string) => {
    const userAcct = userState.filter(obj => user === user) || null;
    if (userAcct && pass === userAcct[0].password){
      props.setDisplay('Dashboard');
      props.setUserId(userAcct[0].userId!)
    }
  };

  return (
    <div>
      <h4>Log In</h4>
      <span>
        <label>Username</label>
        <input ref={user} id='user' type='text'></input>
      </span>
      <span>
        <label>Password</label>
        <input ref={pass} id='pass' type='password'></input>
      </span>
      <button onClick={()=>verifyUser(user.current!.value, pass.current!.value)}>Log In</button>
      <p>Need an account?
        <a 
          href='#'
          onClick ={()=>props.setNoUserAccount(true)}>Sign up</a>
      </p>
    </div>
  )
}

