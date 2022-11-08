//dependencies
import React, { useState } from 'react';
import { useAppDispatch } from '../redux/hooks';
import LogIn from './LogIn';
import SignUp from './SignUp';


export default function Auth(props: { setDisplay: React.Dispatch<React.SetStateAction<string>>}){
  const setDisplay = props.setDisplay;
  const dispatch = useAppDispatch();
  const [noUserAccount, setNoUserAccount] = useState(false);

  return (
    <div>
      <div>fWhenz</div>
      { !noUserAccount ? 
      <LogIn 
        setDisplay={setDisplay}
        setNoUserAccount={setNoUserAccount}
        /> : 
      <SignUp 
        setDisplay={setDisplay}
        setNoUserAccount={setNoUserAccount}
        />}
    </div>
  )
};