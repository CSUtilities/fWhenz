//dependencies
import React from 'react';
import { Routes, Route } from 'react-router-dom';

//components
import Login from './components/userLogin';
import Dashboard from './components/dashboard';
import UserProfile from './components/userProfile';
import List from './components/list';

export default function App() {
  return (
    <div id='app'>
      <Routes>
        <Route index element={<Login />} />
        {/* <Route index path='/components' element={<Dashboard />} />
        <Route index path='/components' element={<UserProfile />} />
        <Route index path='/components' element={<List />} /> */}
      </Routes>
    </div>
  );
}