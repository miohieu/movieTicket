import { combineReducers } from '@reduxjs/toolkit'
import { quanLyNguoiDungReducer } from './quanLyNguoiDung'

export const rootReducer = combineReducers({
    quanLyNguoiDung: quanLyNguoiDungReducer,
})
