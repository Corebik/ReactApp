/* eslint-disable react/prop-types */
/* Dependencies */
import { useState, useEffect } from "react";
import { Box, Button, Stack, TextField, Typography } from '@mui/material'

/* Functions */
import { fetchData, exerciseOptions } from "../utils/fetchData";

/* Components */
import HorizontalScrollbar from "./HorizontalScrollbar.jsx";

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {

    const [search, setSearch] = useState('');
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
            setBodyParts(['all', ...bodyPartsData]);
        }
        fetchExercisesData();
        
    
    }, []);

    const handleSearch = async () => {
        if(search){
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

            const searchedExercises = exercisesData.filter(
                (item) => item.name.toLowerCase().includes(search)
                || item.equipment.toLowerCase().includes(search)
                || item.target.toLowerCase().includes(search)
                || item.bodyPart.toLowerCase().includes(search),
            );

            window.scrollTo({top: 1800, behavior: 'smooth'});

            setSearch("");
            setExercises(searchedExercises);
        }
    }

    return ( 
        <Stack
            alignItems="center"
            mt="37px"
            justifyContent="center"
            p="20px"
        >
            <Typography
                fontWeight={700}
                sx={{fontSize: {lg: '44px', xs: '30px'}}}
                mb="50px"
                textAlign="center"
            >
            Awesome Exercises you <br /> should know
            </Typography>
            <Box
                position="relative"
                mb="72px"
            >
                <TextField 
                    sx={{
                        input: {
                            fontWeight: '700',
                            border: 'none',
                            borderRadius: '4px'
                        },
                        width: {
                            lg: '800px',
                            xs: '350px'
                        },
                        backgroundColor: '#FFF',
                        borderRadius: '40px'
                    }}
                    height="76px"
                    placeholder="Search Exercises"
                    type="text"
                    value={search}
                    onChange={ (e) => {
                        setSearch(e.target.value.toLowerCase())
                    } }
                />
                <Button className="search-btn"
                    sx={{
                        bgcolor: '#FF2625',
                        color: '#FFF',
                        textTransform: 'none',
                        width: {
                            lg: '175px',
                            xs: '80px'
                        },
                        height: '56px',
                        position: 'absolute',
                        right: '0' 
                    }}
                    onClick={handleSearch}
                >
                    Search
                </Button>
            </Box>
            <Box
                sx={{
                    position: "relative",
                    width: '100%',
                    p: '20px'
                }}
            >
                <HorizontalScrollbar data={bodyParts}
                    bodyPart={bodyPart}
                    setBodyPart={setBodyPart}
                    isBodyParts
                />
            </Box>
        </Stack>
    );
}
 
export default SearchExercises;