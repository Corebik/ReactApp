import { Box, Stack, Typography } from '@mui/material'

const Footer = () => {
    return ( 
        <Box mt="80px" bgcolor="#fff3f4">
            <Stack alignItems="center" justifyContent="center" pt="24px">
                <Typography variant="h5" pb="15px" mt="20px" px="15px" >
                    Develop by Ing. César Lozano 
                </Typography>
                <Typography variant="h6" pb="20px" px="15px" justifyContent="center">
                    You can find more projects on my&nbsp;
                    <a href="https://corebikpersonalwebsite.netlify.app/" 
                        target="_blank" rel="noreferrer" 

                            className="portfolio"
                    >
                        Portfolio
                    </a>
                </Typography>
            </Stack>
        </Box>
     );
}
 
export default Footer;