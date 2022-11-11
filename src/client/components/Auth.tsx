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
  const [noUserAccount, setNoUserAccount] = useState(false);

  return (
    <div>
      <div>fWhenz</div>
      { !noUserAccount ? 
      <LogIn 
        setDisplay={props.setDisplay}
        setUserId={props.setUserId}
        setNoUserAccount={setNoUserAccount}
        /> : 
      <SignUp 
        setDisplay={props.setDisplay}
        setUserId={props.setUserId}
        setNoUserAccount={setNoUserAccount}
        />}
    </div>
  )
};