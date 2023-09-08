import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginSchemaType } from "schema";
import  { quanLyNguoiDungServices }  from "services"

export const loginThunk = createAsyncThunk(
    'quanLyNguoiDung/login',
    async(payload: LoginSchemaType, {rejectWithValue}) => {
    try {
        const data = await quanLyNguoiDungServices.login(payload)
        console.log(data.data)
        return data.data

    } catch (err){
    return rejectWithValue(err)
    }
    }
)


