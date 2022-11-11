import React from 'react';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { removeUser } from '../redux/userSlice';

interface Props {
    setUserId: React.Dispatch<React.SetStateAction<number>>
  }

export default function Profile (props: Props) {
  const dispatch = useAppDispatch();

  return (
    <div id='profile'>
      <h4> Please fill out your information so your cohort mates can find you!</h4>
      <div>First Name: <input type="text" /></div> 
      <div>Last Name: <input type="text" /></div> 
      <div>email: <input type="text" /></div> 
      <div>Phone (Optional): <input type="text" /></div> 
      <div>City: <input type="text" /></div> 
      <div>State: <input type="text" /></div> 
      <div>Company (Optional): <input type="text" /></div> 
      <div>
        <button>Cancel</button>
        <button>Save</button>
      </div>
      <button 
        onClick={()=>{
          props.setUserId(0);
        }}>Sign Out</button>
    </div>
  )
};
