import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyPhimService } from 'services' 

export const getMovieListThunk = createAsyncThunk('quanLyPhim/getMovieList', async (_, {rejectWithValue}) => {
    try {
        const data = await quanLyPhimService.getMovieList('')
        console.log(data.data.content,"phim")
        return data.data.content

    } catch(err) {
        rejectWithValue(err)
    }
} )
