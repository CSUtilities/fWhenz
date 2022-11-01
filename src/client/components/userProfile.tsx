import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

export default function Login () {
  const navigate = useNavigate();
  const [user, setUser] = useContext(UserContext);

  useEffect(() => {
    if(!user) return Navigate('/UserLogin');
  });





  return (
    <div className='dashboard'>
      <Header />
      
      </>
  )
}