import {  createSlice } from "@reduxjs/toolkit";
import { Movie } from 'types/Movie'
import { getMovieListThunk } from "./thunk";

type MovieInitialState = {
    movieList?:Movie[]
    isFetchingMovie?: boolean
}

const initialState: MovieInitialState = {
    isFetchingMovie: false
}

const quanLyPhimSlice = createSlice({
    name: 'quanlyPhim',
    initialState,

    reducers: {},

    extraReducers(builder) {
        builder
        .addCase(getMovieListThunk.fulfilled, (state, {payload})=> {
            state.movieList = payload 
            state.isFetchingMovie = false
        })
        .addCase(getMovieListThunk.pending, (state) => {
            state.isFetchingMovie = true
        })
        .addCase(getMovieListThunk.rejected, (state) => {
            state.isFetchingMovie = false
        })
    }

}

)

export const {actions: quanLyPhimActions , reducer: quanLyPhimReducer} = quanLyPhimSlice
