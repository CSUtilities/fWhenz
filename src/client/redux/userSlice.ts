import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

// Define a type for the slice state //exported for testing purposes
export interface UserCredential {
  userId: number | null,
  userName: string | null,
  password: string | null
}

export type UserArray = UserCredential[];

export interface UserState {
  value: UserArray
}

// Define the initial state using that type //exported for testing purposes
export const initialState: UserState = {
  value: [{
    userId: 1001,
    userName: 'km',
    password: '123'
  }]
}

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    assignUser: (state: UserState, action: PayloadAction<UserCredential>) => {
      state.value = [...state.value, action.payload];
    },
    updatePassword: (state: UserState, action: PayloadAction<UserCredential>) => {
      state.value = state.value.map(obj => obj.userId === action.payload.userId ? action.payload : obj);
    },
    removeUser: (state: UserState, action: PayloadAction<number>) => {
      state.value = state.value.filter(obj => obj.userId !== action.payload)
    },
  },
})

export const { assignUser, updatePassword, removeUser } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user.value;

export default userSlice.reducer;

// Exported for testing


//SEE HOOKS.TS FOR USAGE SYNTAX