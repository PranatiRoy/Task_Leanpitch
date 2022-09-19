import { Box } from '@mui/material';
import redArrow from '../assets/red_arrow.png';
import ptLab from '../assets/pt_lab_image.png';
import ButtonComp from './ButtonComp';

<style>
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');
</style>
const ThinkingLabs = () => {
    return (<>
        <Box sx={{
            backgroundColor: 'black', color: 'white'
            , 
        }}>
            <Box
                sx={{ display: 'flex', justifyContent: 'space-around', padding: '0 50px' }}
            >
                <Box sx={{ width: '450px', textAlign: 'left',marginTop:'30px',marginBottom:'100px'}}>
                    <p style={{ color: 'orangered', fontSize: '48px', fontWeight: '500' }}>Leanpitch Thinking Labs</p>
                    <p style={{ color: 'white', fontSize: '13px', fontWeight: '100' }}>
                        Product Thinking Community introduces PT labs, powered by Leanpitch.Product Managers are Creative
                        thinkers and life long researchers. Their curiosuty to understand the problem, persistent to solve them
                        and empathy to make the solutions easy makes them resourceful in solving social problems. <br />
                        If you have it in you and are lokking for an opportunity to contribute back to sociery, join PT labs.
                        Become part of a product team of volunteers, pick up a social problems,swarm together, and design and run experiment
                        to find a problem/solution fit.Present your discovery and be recognized at next product thinking conference.
                        Product thinking community will persue further on implementing a solution in the subsequent cohorts, which you
                        can again be part of.<br /><br />
                        <b>Share your interest by submitting your details.We will get back to you with more information.</b>
                    </p>
                </Box>
                <Box>
                    <img src={ptLab} alt="logo" style={{ width: 400, height: 300, margin: '5px 0', marginLeft: '140px', }} />
                </Box>
            </Box>
            <Box sx={{width:'300px',display:'flex',justifyContent:'space-around',margin:'auto'}}>
            <ButtonComp color="white" bg="orangered" text="View Details" />
            <ButtonComp color="white" bg="orangered" text="Register Now"/>
            </Box>
        </Box>
    </>)
};

export default ThinkingLabs;