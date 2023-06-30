/* eslint-disable react/prop-types */
import { Box, Stack, Typography } from "@mui/material";

import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = ({targetMuscleExercises, equipmentExercises}) => {
    return ( 
        <Box
            sx={{
                mt: {lg: '100px', xs: '0px'}
            }}
        >
            <Typography variant="h3" mb={5}>
                Exercise that target the same muscle group
            </Typography>
            <Stack
                direction="row"
                sx={{
                    p: "2",
                    position: "relative",
                    pb: 2
                }}
            >
                {targetMuscleExercises.length 
                ? <HorizontalScrollbar data={targetMuscleExercises} />
                : <Loader />}

            </Stack>

            <Typography variant="h3" mb={5} mt={7}>
                Exercise that use the same equipment
            </Typography>
            <Stack
                direction="row"
                sx={{
                    p: "2",
                    position: "relative",
                    pb: 2
                }}
            >
                {equipmentExercises.length 
                ? <HorizontalScrollbar data={equipmentExercises} />
                : <Loader />}

            </Stack>
        </Box>
     );
}
 
export default SimilarExercises;