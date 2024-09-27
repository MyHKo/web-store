import {createAsyncThunk} from '@reduxjs/toolkit'

export const getProducts = createAsyncThunk(
    "globalStateSlice/getProducts",
    async () => {
        const response = await fetch("./database/list-of-ids.json")
        return response.json()
    }
)