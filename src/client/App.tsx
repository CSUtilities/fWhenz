import React, {useEffect, useState} from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import { useAppSelector } from './redux/hooks';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Auth from './components/Auth';
import List from './components/List';
import Footer from './components/Footer'


const App = () => {
  const [display, setDisplay] = useState('Dashboard');
  const [userId, setUserId] = useState(0);
  
  useEffect(()=>{ 
      if (userId === 0) setDisplay('Login');
  });

  return (
    <div>
      { display === 'Dashboard' ? <Dashboard /> :
        display === 'Profile' ? <Profile setUserId={setUserId}/> :
        display === 'Login' ? <Auth setDisplay={setDisplay} setUserId={setUserId}/> :
        display === 'List' ? <List /> : <></>
      }
      {userId !== 0 ? <Footer setDisplay={setDisplay} /> : <></>}
    </div>
  );
}

const main = document.getElementById('root');
const root = createRoot(main!); // createRoot(container!) if you use TypeScript
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);