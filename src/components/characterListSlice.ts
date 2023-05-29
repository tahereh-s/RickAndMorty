import {createSlice} from "@reduxjs/toolkit"
import type {PayloadAction} from "@reduxjs/toolkit"
import type { RootState } from "../app/store"

interface characterListState{
    value:string[];
}
const initialState:characterListState={
    value:['morty','ricky']
}


export const characterListSlice=createSlice({
    name:'characterList',
    initialState,
    reducers:{

    }
})

export const {} =characterListSlice.actions
export default characterListSlice.reducer