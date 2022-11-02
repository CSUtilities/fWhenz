import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

// Define a type for the slice state
interface Profile {  
    userId: number | null,
    firstName: string | null,
    lastName: string | null,
    city: string | null,
    state: string | null,
    company: string | null,
    email: string | null,
  }

interface ProfileState {
  value: Profile
}

// Define the initial state using that type //exported for testing purposes
export const initialProfile: Profile = {  
    userId: null,
    firstName: null,
    lastName: null,
    city: null,
    state: null,
    company: null,
    email: null,
  }
// Define the initial state using that type //exported for testing purposes
export const initialState: ProfileState = {
  value: initialProfile 
}

export const profileSlice = createSlice({
  name: 'profile',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    createProfile: (state: ProfileState, action: PayloadAction<Profile>) => {
      state.value = action.payload;
    },
    updateProfile: (state: ProfileState, action: PayloadAction<Profile>) => {
      state.value = action.payload;
    },
    deleteProfile: (state: ProfileState) => {
      state.value = initialProfile;
    },
  },
})

export const { createProfile, updateProfile, deleteProfile } = profileSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectProfile = (state: RootState) => state.profile.value;

export default profileSlice.reducer;


//SEE HOOKS.TS FOR USAGE SYNTAX