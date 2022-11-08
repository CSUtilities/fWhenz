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
  const user = useAppSelector((state) => state.user.value);
  
  useEffect(()=>{ 
      if (!user) setDisplay('Login');
  });

  return (
    <div>
      { display === 'Dashboard' ? <Dashboard /> :
        display === 'Profile' ? <Profile /> :
        display === 'Login' ? <Auth setDisplay={setDisplay}/> :
        display === 'List' ? <List /> : <></>
      }
      {user ? <Footer setDisplay={setDisplay} /> : <></>}
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