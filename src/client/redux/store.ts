import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../redux/userSlice'; 
import profileReducer from  '../redux/profileSlice';
import peopleReducer from  '../redux/peopleSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
    people: peopleReducer
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;


//SEE HOOKS.TS FOR USAGE SYNTAX