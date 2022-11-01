import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

// Define a type for the slice state
interface UserState {
  value: string | null
}

// Define the initial state using that type
const initialState: UserState = {
  value: 'Kris',
}

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    assignUser: (state, action: PayloadAction<string | null>) => {
      state.value = action.payload;
    },
    removeUser: (state: UserState) => {
      state.value  = null;
    },
  },
})

export const { assignUser, removeUser } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user.value;

export default userSlice.reducer;