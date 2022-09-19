import { Box } from '@mui/material';
import redArrow from '../assets/red_arrow.png';
import matterPic from '../assets/matters-pic.jfif';
import Button from '@mui/material/Button';
import { blue } from '@mui/material/colors';
import ButtonComp from './ButtonComp';

<style>
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');
</style>

const WhyMatter = () => {
    return (<>
        <Box sx={{
            backgroundColor: 'black', color: 'white'
            , fontFamily: 'Playfair Display serif',paddingTop:'40px'
        }}>
            <p style={{ color: 'yellow', fontSize: '38px' }}>Why We Matter?</p>
            <img src={redArrow} alt="logo" style={{ width: 200, height: 45, margin: '5px 0', marginLeft: '140px' }} />
            <Box
                sx={{ display: 'flex', justifyContent: 'space-around', padding: '0 50px',marginBottom:'50px' }}
            >
                <Box sx={{ width: '450px', textAlign: 'left' }}>
                    <p style={{ color: 'white', fontSize: '28px', fontWeight: '100' }}>Creative Thinking for creating an impact!</p>
                    <p style={{ color: 'white', fontSize: '13px', fontWeight: '100' }}>Leanpitch is problem solving, whether it's your kid asking for a solution to his
                        day to day problems or the rise in threats of Global Warming, it's evident that
                        the whole humna kind needs to be product thinker. We, at product thinking community,
                        strive to provide such a platform for practitioners to come together and learn from
                        each other about the craft of buiding products.This platform is run bu the community
                        for the community.We are a community with 46k+ product thinkers, hosting various events
                        across India:webinars every week, meet-ups every month in every city, two conference a year.</p>
                </Box>
                <Box>
                    <img src={matterPic} alt="logo" style={{ width: 400, height: 300, margin: '5px 0', marginLeft: '140px' }} />
                </Box>
            </Box>

            <ButtonComp color="black" bg="white" text="Join Our Community"/>

        </Box>
        <hr style={{color:'white'}}/>
    </>)
}

export default WhyMatter;