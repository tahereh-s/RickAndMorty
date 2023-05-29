import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../app/store"

interface CharacterState {
    value: string;
}
const initialState = {
    // value:'morty',
    characterInfo: {},
    loading: false,
    error: null,
}

export const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {

    },
    extraReducers: {},
})

export const { } = characterSlice.actions
export default characterSlice.reducer