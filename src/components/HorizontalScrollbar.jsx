/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import BodyPart from "../components/BodyPart.jsx";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { useContext } from "react";
import LeftArrowIcon from "../assets/icons/left-arrow.png";
import RightArrowIcon from "../assets/icons/right-arrow.png";

import ExerciseCard from "./ExerciseCard.jsx";



const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollPrev()} className="right-arrow">
        <img src={LeftArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollNext()} className="left-arrow">
        <img src={RightArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };

const HorizontalScrollbar = ({ data, setBodyPart, bodyPart, isBodyParts }) => (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{ overflow: "hidden" }}>
        {data.map((item) => (
            <Box
                key={item.id || item}
                itemId={item.id || item}
                title={item.id || item}
                m="0 40px"
            >
              {isBodyParts 
              ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
              : <ExerciseCard exercise={item} />}
            </Box>
      ))}
    </ScrollMenu>

  );
export default HorizontalScrollbar;