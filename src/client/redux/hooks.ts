import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, Dispatch } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => Dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


//USE TYPED HOOKS IN COMPONENTS
// import { useAppSelector, useAppDispatch } from 'redux/hooks';
// import { assignUser, removeUser } from './redux/userSlice';

// export function Dashboard() {
//   //to access state
//   const user = useAppSelector((state) => state.user.value);
//   const dispatch = useAppDispatch();

//   //to use actions
//   dispatch(removeUser());
// }