import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginSchemaType } from "schema";
import  { quanLyNguoiDungServices }  from "services"
import { sleep } from "utils/sleep";

export const loginThunk = createAsyncThunk(
    'quanLyNguoiDung/login',
    async(payload: LoginSchemaType, {rejectWithValue}) => {
    try {
        const data = await quanLyNguoiDungServices.login(payload)

        await sleep()

        return data.data.content

    } catch (err){
    return rejectWithValue(err)
    }
    }
)


