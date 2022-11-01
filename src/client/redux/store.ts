import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../redux/userSlice'; 

const store = configureStore({
  reducer: {
    user: userReducer,
    // userProfile: userProfileReducer,
    // list: listReducer,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;