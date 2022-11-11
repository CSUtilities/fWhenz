import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

// Define a type for the slice state //exported for testing purposes
export interface People {  
    userId: number | null,
    firstName: string | null,
    lastName: string | null,
    city: string | null,
    state: string | null,
    company: string |null,
    email: string | null,
  }
// Define a type for the slice state //exported for testing purposes
export type PeopleArray = People[];

// Define a type for the slice state //exported for testing purposes
export interface PeopleState {
  value: PeopleArray
}
// Define the initial People
const initialPeople: PeopleArray = [
  {  
    userId: 1001,
    firstName: 'Kris',
    lastName: 'Magat',
    city: 'San Francisco',
    state: 'CA',
    company: 'Microsoft',
    email: 'kris@microsoft.com',
  },
  {  
    userId: 1002,
    firstName: 'Kevin',
    lastName: 'Wang',
    city: 'Fremont',
    state: 'CA',
    company: 'Amazon',
    email: 'kevin@amazon.com',
  },
  {  
    userId: 1003,
    firstName: 'David',
    lastName: 'Cheng',
    city: 'New York',
    state: 'NY',
    company: 'Netflix',
    email: 'david@netflix.com',
  },
  {  
    userId: 1004,
    firstName: 'Vu',
    lastName: 'Duong',
    city: 'Los Angeles',
    state: 'CA',
    company: 'Google',
    email: 'vudu@google.com',
  },
];


// Define the initial state using that type //exported for testing purposes
export const initialState: PeopleState = {
  value: initialPeople
}

export const PeopleSlice = createSlice({
  name: 'people',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    getPeople: (state: PeopleState, action: PayloadAction<PeopleArray>) => {
      state.value = action.payload;
    },
    
  },
})

export const { getPeople } = PeopleSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectPeople = (state: RootState) => state.people.value;

export default PeopleSlice.reducer;


//SEE HOOKS.TS FOR USAGE SYNTAX