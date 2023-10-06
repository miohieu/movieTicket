import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyPhimService } from 'services'
import { sleep } from "utils";

export const getMovieListThunk = createAsyncThunk('quanLyPhim/getMovieList', async (_, { rejectWithValue }) => {
    try {
        const data = await quanLyPhimService.getMovieList('')
        await sleep(2000)
        return data.data.content

    } catch (err) {
        rejectWithValue(err)
    }
})

