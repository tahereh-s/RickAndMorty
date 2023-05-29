import { CircularProgress, Grid } from "@mui/material"
import { useAppSelector, useAppDispatch } from "../app/hooks";
import CharacterList from "./characterList";
import { useQuery } from "@apollo/client";
import { GET_ALL_CHARACTERS } from "../graphql/queries";
const Character = () => {

    // const { data, isLoading, error } = useAppSelector(
    //     (state) => state.character
    // );
    const { error, data } = useQuery(GET_ALL_CHARACTERS, {
        variables: { page: 1 }
    })


    // if (isLoading) return (
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
            {data?.characters?.results?.map((character: any) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={character.id}>
                    <CharacterList character={character} />
                </Grid>
            ))}
        </Grid>
    )
}

export default Character