import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './rootReducer'
import { useDispatch, useSelector} from 'react-redux'
import { TypedUseSelectorHook } from 'react-redux'
import { getUserByAccessTokenThunk } from './quanLyNguoiDung'

export const store = configureStore({
    reducer: rootReducer,
})

store.dispatch(getUserByAccessTokenThunk())

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types
export type RootState = ReturnType<(typeof store)['getState']>

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store
