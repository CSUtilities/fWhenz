import React, { useState, createContext, UserContext } from 'react';
import { render } from 'react-dom';
import { RouteContext } from 'react-router';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/UserLogin';
import UserProfile from './components/UserProfile';
import List from './components/List';

import { Provider } from 'react-redux';
import store from './redux/store';
import { useAppSelector, useAppDispatch } from './redux/hooks';
import { assignUser, removeUser } from './redux/userSlice';

const App = () => {
  const user = useAppSelector((state)=> state.user.value);
  const dispatch = useAppDispatch();



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
render(
  <Provider store={store}>
    <App />
  </Provider>, document.querySelector('#root'));
