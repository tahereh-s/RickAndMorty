import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
// import type { PayloadAction } from "@reduxjs/toolkit"
import apolloClient from "../graphql/client";
import { GET_ALL_CHARACTERS } from "../graphql/queries"
interface CharacterState {
    characterInfo: [],
    loading: boolean,
    error: null |string,
    pageCount:number,
    page:number
}
interface FilterCharacter {
    name?: string;
    status?: string;
    species?: string;
    type?: string;
    gender?: string;
}
const initialState:CharacterState = {
    // value:'morty',
    characterInfo: [],
    loading: false,
    error: null,
    pageCount:1,
    page:1
}
export const getCharacters = createAsyncThunk(
    'characters/fetchCharacters',
    async ({ page = 1, filter }: { page?: number; filter?: FilterCharacter }) => {

        const { data } = await apolloClient.query({
            query: GET_ALL_CHARACTERS,
            variables: {
                page,
                filter,
            },
        });
        return {
            results: data.characters.results,
            info: data.characters.info
        };
    },
);

export const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            getCharacters.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
        builder.addCase(
            getCharacters.fulfilled, (state,action) =>{
                state.characterInfo=action.payload.results;
                state.error=null;
                state.loading=false;
                state.page=action.payload.info.pages;
                state.pageCount=action.payload.info.count;

            })
        builder.addCase(
            getCharacters.rejected, (state, action) => {
                // state.characterInfo = action.payload.info;
                state.loading = true;
                state.error = action.error.message ?? 'api has problem!'
            }
        );

    },
})

// export const characterActions = characterSlice.actions
export default characterSlice.reducer