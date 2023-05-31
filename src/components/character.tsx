import { Box, CircularProgress, Grid, Pagination, TextField, debounce } from "@mui/material"
import { useAppSelector, useAppDispatch } from "../app/hooks";
import CharacterList from "./characterList";
import { useEffect, useMemo, useState } from "react";
import { getCharacters } from "./characterSlice";

const Character = () => {
    const [page, setPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const { characterInfo, loading, error, pageCount } = useAppSelector(state => state.character);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getCharacters({ page: 1, filter: {} }))
    }, [])

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        dispatch(getCharacters({ page: value }));
    };

    const handleSearchChange = useMemo(() =>
        debounce((value: string) => {
            dispatch(getCharacters({ page: 1, filter: { name: value } }));
        }, 500), []);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchTerm(value);
        handleSearchChange(value);
    };

    // if (loading) return (
    //     <div className="flex justify-center items-center h-full">
    //         <CircularProgress />
    //     </div>
    // )
    if (error) {
        return <p>Error: {error}</p>;
    }
    return (
        <Grid container py={8} justifyContent="center">
            <Grid item md={12} mb={8} mx={6}>
                <TextField
                    type="text"
                    label="Search by name"
                    value={searchTerm}
                    color="primary"
                    fullWidth
                    onChange={handleInputChange}
                />
            </Grid>
            {characterInfo?.length  ?
                characterInfo?.map((character: any) => (
                    <Grid item xs={12} sm={6} md={12} lg={3} key={character.id}>
                        <CharacterList character={character}  />
                    </Grid>
                ))
                :
                <div className="flex justify-center h-full py-12">
                    No result found
                </div>
            }
            {loading&&
            <div className="flex justify-center items-center h-full">
                   <CircularProgress />
               </div>
            }
      
            {!loading && (
                <Grid style={{ marginTop: '40px' }} item xs={12} sm={12} md={12} justifyContent="center">
                    <Pagination
                        className="align"
                        style={{ textAlign: 'center' }}
                        count={pageCount}
                        page={page}
                        onChange={handlePageChange}
                        variant="outlined"
                        color="primary"
                    />
                </Grid>
            )}
        </Grid>
    )
}

export default Character