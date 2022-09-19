import * as React from 'react';
import Button from '@mui/material/Button';
// import EastIcon from '@mui/icons-material/East';
import Stack from '@mui/material/Stack';

const Conference = () => {
    return (
        <>
            <div className="component" style={{ fontSize: '16px', padding: '0px 20px' }}>
                Conferences are not just about learning from the speakers. It's also about meeting new people, learning from
                attendees,making connections to each other and being part of a community. <br /><br />
                Having hosted the conference online last year and after close consultation with the community, speakers,
                exhibitors and event partners, we have decied to host our next conference in person to make it more effective.
                <br /> <br />
                We will be back with more information once COVID subsides. <br/> <br/>
                <button className='btn-conference'>
                    <span>Notify Me</span>  &nbsp;
                
                </button>
            </div>
            
        </>
    )
}

export default Conference;