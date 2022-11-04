import reducer, {
  createProfile,
  updateProfile,
  deleteProfile,
  initialState,
  ProfileState,
  Profile
} from '../src/client/redux/profileSlice';

//used for testing
const oldProfile: Profile = {
    userId: 4321,
      firstName: 'Kirk',
      lastName: 'Hammet',
      city: 'San Francisco',
      state: 'CA',
      company: 'Metallica',
      email: 'kh@metallica.com',
};
const oldState: ProfileState = {
    value: oldProfile
  };
//used for testing
const newProfile: Profile = {
    userId: 1234,
    firstName: 'Kurt',
    lastName: 'Cobain',
    city: 'Seattle',
    state: 'WA',
    company: 'Nirvana',
    email: 'kc@nirvana.com',
};
const newState: ProfileState = {
  value: newProfile
}

test('should return the initial state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual(initialState);
});

test('should assign values to profileState', () => {
  const previousState: ProfileState = initialState;
  expect(reducer(previousState, createProfile(newProfile))).toEqual(newState);
});

test('should update the user value', () => {
  const previousState: ProfileState = oldState;
  expect(reducer(previousState, updateProfile(newProfile))).toEqual(newState);
});

test('should delete the user value', () => {
  const previousState: ProfileState = newState;
  expect(reducer(previousState, deleteProfile())).toEqual(initialState);
});

//TO RUN TEST: npx jest