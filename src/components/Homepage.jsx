import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import SideBar from './SideBar';
import Trainings from './Trainings';
import Meetups from './Meetups';
import Webinars from './Webinars';
import Conference from './Conference';
import Videos from './Videos';
import PMSpeakerSeries from './PMSpeakerSeries';
import Blogs from './Blogs';
import Podcasts from './Podcasts';
import BeASpeaker from './BeASpeaker';
import BeAVolunteer from './BeAVolunteer';
import AboutUs from './AboutUs';
import SendMessageButton from './SendMessageButton';
import WhyMatter from './WhyMatter';
import ThinkingLabs from './ThinkingLabs';

const Homepage = () => {
    return (
        <>
         <Box style={{ display: 'flex', width: '100%',flexDirection:'column'}}>
            <Box style={{ display: 'flex', width: '100%',}}>
                <Router>
                    {/* <Header/> */}
                    <SideBar/>
                    <Routes>
                        <Route path="/trainings" element=<Trainings/>/>
                        <Route path="/meetups" element=<Meetups/> />
                        <Route path="/webinars" element=<Webinars/> />
                        <Route path="/conference" element=<Conference/> />
                        <Route path="/videos" element=<Videos/> />
                        <Route path="/pm-speak-series" element=<PMSpeakerSeries/> />
                        <Route path="/blogs" element=<Blogs/> />
                        <Route path="/podcasts" element=<Podcasts/> />
                        <Route path="/be-a-speaker" element=<BeASpeaker/> />
                        <Route path="/be-a-volunteer" element=<BeAVolunteer/> />
                        <Route path="/aboutus" element=<AboutUs/> />
                    </Routes>
                </Router>
            </Box>
            <WhyMatter/>
            <ThinkingLabs/>
            </Box>
            
        </>
    )
}

export default Homepage;