//dependencies
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { render } from 'react-dom';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

//redux
import store from './redux/store';

//components
import Login from './components/userLogin';
import Dashboard from './components/dashboard';
import UserProfile from './components/userProfile';
import List from './components/list';




const App = () => {
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

render(<Provider store={store}>
    <App />
  </Provider>, document.querySelector('#root'));