import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { exerciseOptions, fetchData } from "../utils/fetchData";

import Detail from "../components/Detail";
import SimilarExercises from "../components/SimilarExercises";

const ExerciseDetail = () => {

    const [exerciseDetail, setExerciseDetail] = useState({});
    const { id } = useParams();

    const [targetMuscleExercise, setTargetMuscleExercise] = useState([]);
    const [equipmentExercises, setEquipmentExercises] = useState([]);

    useEffect(() => {
        const fetchExercisesData = async () => {
            
            const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
            const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);

            setExerciseDetail(exerciseDetailData);

            const targetMuscleExerciseData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
            setTargetMuscleExercise(targetMuscleExerciseData);

            const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
            setEquipmentExercises(equipmentExercisesData);
        }

        fetchExercisesData();
    },[id])

    

    return ( 
        <Box>
            <Detail exerciseDetail={exerciseDetail} />
            <SimilarExercises 
                targetMuscleExercises={targetMuscleExercise} 
                equipmentExercises={equipmentExercises} 
            />
        </Box>
     );
}
 
export default ExerciseDetail;