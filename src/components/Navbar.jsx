import { Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

const Navbar = () => {

    const [activeId, setActiveId] = useState("0001");

    const { id } = useParams();

    useEffect(() => {

        const navActive = () => {

            if(id === undefined){
                return
            }else{
                setActiveId(id);
            }

        }

        navActive();
        
    },[id])

    let activeUrl = `/exercise/${activeId}`; 

    function activeColor({isActive}){
        return {
            borderBottom: isActive ? "3px solid #FF2625" : '',
            textDecoration: "none",
            color: "#3A1212"
        }
    }

    return ( 
        <Stack
            direction="row"
            sx={{gap: {xs: '40px', sm: '122px'}, 
                mt: {sm: '32px', xs: "20px"},
                justifyContent: "none"}}
            px="20px"
        >
            <NavLink to="/"
                style={{
                    textDecoration: "none", 
                    color: "#3A1212", 
                }}
                className="sign-grow"
            >
                {/* <img src={Logo} alt="logo" style={{ width: "48px", height: "48px", margin: "0 20px" }} /> */}
                <Typography
                    fontWeight="700"
                    mt="7px"
                    sx={{flexGrow: 1}}
                >
                    COREBIK
                </Typography>
            </NavLink>
            <Stack
                direction="row"
                gap="40px"
                fontSize="24px"
                alignItems="flex-end"
            >
                <NavLink to="/" 
                    style={activeColor}
                    >
                        Home
                    </NavLink>
                {/* <a href="#exercises" style={{textDecoration: "none", color: "#3A1212"}}>Exercises</a> */}
                <NavLink to={activeUrl} 
                    style={activeColor}
                    >
                        Exercises
                    </NavLink>
            </Stack>
        </Stack>
     );
}
 
export default Navbar;