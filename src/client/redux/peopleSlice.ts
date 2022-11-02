import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

// Define a type for the slice state
interface People {  
    userId: null,
    firstName: null,
    lastName: null,
    city: null,
    state: null,
    company: null,
    email: null,
  }

interface PeopleState {
  value: [People] | []
}

// Define the initial state using that type
const initialState: PeopleState = {
  value: []
}


export const PeopleSlice = createSlice({
  name: 'people',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    getPeople: (state: PeopleState, action: PayloadAction<[People]>) => {
      state.value = action.payload;
    },
  },
})

export const { getPeople } = PeopleSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectPeople = (state: RootState) => state.people.value;

export default PeopleSlice.reducer;