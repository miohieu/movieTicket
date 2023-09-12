import { createSlice } from '@reduxjs/toolkit'
import { UserByAccessTokenProp, UserLogin } from 'types/UserManagement'
import { getUserByAccessTokenThunk, loginThunk } from '.'
import { getAccessToken } from 'utils'

type QuanLyNguoiDungInitialState = {
    accessToken?: string
    userLogin?: UserLogin | UserByAccessTokenProp
    isFetching?: boolean
}

const initialState: QuanLyNguoiDungInitialState = {
    accessToken: getAccessToken(),
    isFetching: false
}

const quanLyNguoiDungSlice = createSlice({
    name: 'quanLyNguoiDung',
    initialState,
    reducers: {
        logout: (state) => {
            state.accessToken = undefined
            state.userLogin = undefined

            localStorage.removeItem("ACCESSTOKEN")
        }
    },
    extraReducers(builder) {
        builder
        .addCase(loginThunk.fulfilled, (state, {payload}) => {
            localStorage.setItem('ACCESSTOKEN', payload.accessToken)

            state.accessToken = payload.accessToken

            state.userLogin = payload
            state.isFetching = false

        })
        .addCase(loginThunk.pending, (state)=> {
            state.isFetching = true
        })
        .addCase(loginThunk.rejected, (state) => {
            state.isFetching = false
        })
        .addCase(getUserByAccessTokenThunk.fulfilled, (state, {payload})=> {
            state.userLogin = payload
        })

    },
})

export const { actions: quanLyNguoiDungActions, reducer: quanLyNguoiDungReducer } =
    quanLyNguoiDungSlice
