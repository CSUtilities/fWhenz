import reducer, { getPeople, initialState, People, PeopleState, PeopleArray} from '../src/client/redux/peopleSlice';

//used for testing
const kh: People = {
  userId: 4321,
  firstName: 'Kirk',
  lastName: 'Hammet',
  city: 'San Francisco',
  state: 'CA',
  company: 'Metallica',
  email: 'kh@metallica.com',
}
const kc: People = {
  userId: 1234,
  firstName: 'Kurt',
  lastName: 'Cobain',
  city: 'Seattle',
  state: 'WA',
  company: 'Nirvana',
  email: 'kc@nirvana.com',
}

const peopleList: PeopleArray = [kh, kc];

const newState: PeopleState = {
  value: peopleList
}

test('should return the initial state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual(initialState);
});

test('should assign an array of people to peopleState', () => {
  const previousState: PeopleState = initialState;
  expect(reducer(previousState, getPeople(peopleList))).toEqual(newState);
});


//TO RUN TEST: npx jest