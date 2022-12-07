import reducer, {
  assignUser,
  removeUser,
  initialState,
  UserState,
  UserArray,
  UserCredential
} from '../src/client/redux/userSlice';

const user: UserCredential = {
  userId: 200,
  userName: 'Magic',
  password: 'johnson'
}


test('should return the initial state', () => {
  console.log(initialState.value);
  expect(reducer(undefined, { type: undefined })).toEqual(initialState);
});

test('should assign a user to the value property', () => {
  const previousState: UserState = {value: initialState.value}
  expect(reducer(previousState, assignUser(user))).toEqual({value:[...previousState.value, user]});
});

test('should remove the user value', () => {
  const previousState: UserState = {value: [...initialState.value, user]};
  expect(reducer(previousState, removeUser(200))).toEqual(initialState);
});

//TO RUN TEST: npx jest