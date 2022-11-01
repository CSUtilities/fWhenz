import React, { useState, createContext, UserContext } from 'react';
import { render } from 'react-dom';
import { RouteContext } from 'react-router';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/dashboard';
import UserLogin from './components/userLogin';
import UserProfile from './components/userProfile';
import List from './components/list';


const App = () => {
  const [user, setUser] = useState(null);
  
  return (
    <div id='app'>
      <UserContext.Provider value = {[user, setUser]}>
        <Routes>
          <Route index element={<Dashboard />} />
          <Route index path='/*' element={<UserLogin />} />
          <Route index path='/*' element={<UserProfile />} />
          <Route index path='/*' element={<List />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

render(<App />, document.querySelector('#root'));

export { App, UserContext };