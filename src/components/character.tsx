import { CircularProgress, Grid } from "@mui/material"
import { useAppSelector, useAppDispatch } from "../app/hooks";
import CharacterList from "./characterList";
import { useEffect } from "react";
import { getCharacters } from "./characterSlice";
// import { useQuery } from "@apollo/client";
// import { GET_ALL_CHARACTERS } from "../graphql/queries";
const Character = () => {

    // const { characterInfo, loading, error } = useAppSelector(state => state.character);
    const characterInfo  = useAppSelector(state => state.character.characterInfo);

    const dispatch = useAppDispatch();

    useEffect(() => {
        console.log(characterInfo);
        
        dispatch(getCharacters({ page: 1, filter: {} }))
    }, [dispatch])







    // if (loading) return (
    //     <div className="flex justify-center items-center h-full">
    //         <CircularProgress />
    //     </div>
    // )

    // if (error) {
    //     return <p>Error: {error}</p>;
    // }
    // if (!data?.length) {
    //     return <div className="flex justify-center h-full py-12">
    //         No result found
    //     </div>
    // }
    return (
        <Grid container py={8} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {characterInfo?.map((character:any) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={character.id}>
                    <CharacterList character={character} />
                </Grid>
            ))}
        </Grid>
     
    )
}

export default Character