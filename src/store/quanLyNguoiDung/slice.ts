import { createSlice } from '@reduxjs/toolkit'
import { UserLogin } from 'types/UserManagement'
import { loginThunk } from '.'

type QuanLyNguoiDungInitialState = {
    accessToken?: string
    userLogin?: UserLogin
    isFetching?: boolean
}

const initialState: QuanLyNguoiDungInitialState = {
    accessToken: localStorage.getItem('ACCESSTOKEN'),
    isFetching: false
}

const quanLyNguoiDungSlice = createSlice({
    name: 'quanLyNguoiDung',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(loginThunk.fulfilled, (state, {payload}) => {
            console.log(payload)
            localStorage.setItem('ACCESSTOKEN', payload.accessToken)

            state.userLogin = payload
            state.isFetching = false

        })
        .addCase(loginThunk.pending, (state)=> {
            state.isFetching = true
        })
        .addCase(loginThunk.rejected, (state) => {
            state.isFetching = false
        })

    },
})

export const { actions: quanLyNguoiDungActions, reducer: quanLyNguoiDungReducer } =
    quanLyNguoiDungSlice
