import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App.js';


export default function Dashboard() {

  const navigate = useNavigate();
  const [user, setUser] = useContext(UserContext);

  useEffect(() => {
    if (!user) return navigate('/userLogin');
  });






  return (
    <div className='dashboard'>
      
      </>
  )
}