import reducer, {
  assignUser,
  removeUser,
  initialState,
  UserState
} from '../src/client/redux/userSlice';

test('should return the initial state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual({ value: null });
});

test('should assign a number to the value property', () => {
  const previousState: UserState = {value: null}
  expect(reducer(previousState, assignUser(200))).toEqual({value: 200});
});

test('should remove the user value', () => {
  const previousState: UserState = {value: 500};
  expect(reducer(previousState, removeUser())).toEqual({value: null});
});

//TO RUN TEST: npm t