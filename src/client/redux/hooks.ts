import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, Dispatch } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => Dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;



//USE TYPED HOOKS IN COMPONENTS
// import React, { useState } from 'react'

// import { useAppSelector, useAppDispatch } from 'app/hooks'

// import { decrement, increment } from './counterSlice'

// export function Dashboard() {
//   // The `state` arg is correctly typed as `RootState` already
//   const user = useAppSelector((state) => state.user.value)
//   const dispatch = useAppDispatch()

//   // omit rendering logic
// }