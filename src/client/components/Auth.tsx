//dependencies
import React, { useState } from 'react';
import { useAppDispatch } from '../redux/hooks';
import LogIn from './LogIn';
import SignUp from './SignUp';

interface Props {
    setDisplay: React.Dispatch<React.SetStateAction<string>>,
    setUserId: React.Dispatch<React.SetStateAction<number>>
  }

export default function Auth(props: Props){
  const setDisplay = props.setDisplay;
  const setUserId = props.setUserId;
  const dispatch = useAppDispatch();
  const [noUserAccount, setNoUserAccount] = useState(false);

  return (
    <div>
      <div>fWhenz</div>
      { !noUserAccount ? 
      <LogIn 
        setDisplay={setDisplay}
        setUserId={setUserId}
        setNoUserAccount={setNoUserAccount}
        /> : 
      <SignUp 
        setDisplay={setDisplay}
        setUserId={setUserId}
        setNoUserAccount={setNoUserAccount}
        />}
    </div>
  )
};