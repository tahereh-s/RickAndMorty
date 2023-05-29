import { configureStore } from "@reduxjs/toolkit";
import characterReducer from '../components/characterSlice'
import characterListReducer from '../components/characterListSlice'


export const store=configureStore({
        reducer:{
            character:characterReducer,
            characterList:characterListReducer
        }
    
    }
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
