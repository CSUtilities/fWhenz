import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { useAppSelector, useAppDispatch } from './redux/hooks';
import { assignUser, removeUser } from './redux/userSlice';

const App = () => {
  const user = useAppSelector((state)=> state.user.value);
  const dispatch = useAppDispatch();

    return (
    <div>
      State: {user}
      <button onClick={() => dispatch(assignUser('Kevin'))} >Assign</button>
      <button onClick={() => dispatch(removeUser())} >Remove</button>

    </div>
  );
}

render(
  <Provider store={store}>
    <App />
  </Provider>, document.querySelector('#root'));