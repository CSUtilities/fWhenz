import React, { useState, createContext, UserContext } from 'react';
import { render } from 'react-dom';
import { RouteContext } from 'react-router';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/UserLogin';
import UserProfile from './components/UserProfile';
import List from './components/List';


const App = () => {
  const [user, setUser] = useState(null);
  
  return (
    <div id='app'>
      <UserContext.Provider value = {[user, setUser]}>
        <Routes>
          <Route index element={<Login />} />
          <Route index path='/components' element={<Dashboard />} />
          <Route index path='/components' element={<UserProfile />} />
          <Route index path='/components' element={<List />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

render(<App />, document.querySelector('#root'));

export { App, UserContext };