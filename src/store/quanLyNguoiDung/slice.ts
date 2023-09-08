import { createSlice } from '@reduxjs/toolkit'
import { UserLogin } from 'types/UserManagement'
import { loginThunk } from '.'

type QuanLyNguoiDungInitialState = {
    acessToken?: string
    userLogin?: UserLogin
}

const initialState: QuanLyNguoiDungInitialState = {
    acessToken: localStorage.getItem('ACCESSTOKEN')
}

const quanLyNguoiDungSlice = createSlice({
    name: 'quanLyNguoiDung',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(loginThunk.fulfilled, (state, {payload}) => {
            state.acessToken = payload

        })

    },
})

export const { actions: quanLyNguoiDungActions, reducer: quanLyNguoiDungReducer } =
    quanLyNguoiDungSlice
