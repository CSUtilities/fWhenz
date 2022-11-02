import reducer, {
  createProfile,
  updateProfile,
  deleteProfile,
  initialState,
  initialProfile
} from '../src/client/redux/profileSlice';

//used for testing
const initProfile: typeof initialProfile = {
    userId: null,
    firstName: null,
    lastName: null,
    city: null,
    state: null,
    company: null,
    email: null,
};
const initState: typeof initialState = {
  value: initProfile
};
//used for testing
const oldProfile: typeof initialProfile = {
    userId: 4321,
      firstName: 'Kirk',
      lastName: 'Hammet',
      city: 'San Francisco',
      state: 'CA',
      company: 'Metallica',
      email: 'kh@metallica.com',
};
const oldState: typeof initialState = {
    value: oldProfile
  };
//used for testing
const newProfile: typeof initialProfile = {
    userId: 1234,
    firstName: 'Kurt',
    lastName: 'Cobain',
    city: 'Seattle',
    state: 'WA',
    company: 'Nirvana',
    email: 'kc@nirvana.com',
};
const newState: typeof initialState = {
  value: newProfile
}

test('should return the initial state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual(initialState);
});

test('should assign values to profileState', () => {
  const previousState: typeof initialState = initialState;
  expect(reducer(previousState, createProfile(newProfile))).toEqual(newState);
});

test('should update the user value', () => {
  const previousState: typeof initialState = oldState;
  expect(reducer(previousState, updateProfile(newProfile))).toEqual(newState);
});

test('should delete the user value', () => {
  const previousState: typeof initialState = newState;
  expect(reducer(previousState, deleteProfile())).toEqual(initialState);
});

//TO RUN TEST: npm t