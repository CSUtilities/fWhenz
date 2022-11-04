import React from 'react';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { removeUser } from '../redux/userSlice';

export default function Profile () {
  const user = useAppSelector((state) => state.user.value);
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
          dispatch(removeUser());
          console.log('User:', user);
        }}>Sign Out</button>
    </div>
  )
};
