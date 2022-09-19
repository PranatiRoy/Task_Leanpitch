import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import logoDt from '../assets/dt.gif';



const card = (
    <React.Fragment>
        
    </React.Fragment>
);

const TrainingCards = (props) => {
    return (
        <Box >
            <Card variant="outlined"
                sx={{
                    backgroundColor: props.bg,
                    width: '200px',
                    height: '200px',
                    borderRadius: '10px',
                    margin: '10px',
                    color: 'white',
                    paddingBottom:'30px'

                }}
            >
                <CardContent
            sx={{ margin: '0px' }}
        >
            <Typography sx={{ fontSize: 14, textAlign: 'left' }} color="text.secondary">
                <img src={props.logo} alt="logo" style={{ width: 50, height: 50, margin: '5px 0', marginLeft: '0px', borderRadius: '50px' }} />
            </Typography>

            <Typography sx={{ mb: 1.5, fontSize: '12px', textAlign: 'left', fontWeight:'500' }}>
                {props.heading}            </Typography>
            <Typography
                sx={{ backgroundColor: 'darkgray', fontSize: '8px', margin: '0px',textAlign:'left'}}>
                Upcoming Training
                <br />
            </Typography>
            <Typography
                sx={{ backgroundColor: 'darkgray', fontSize: '12px', margin: '0px',textAlign:'left' }}>
                {props.date}
            </Typography>
        </CardContent>
        <CardActions>
        <Button
        sx={{backgroundColor:'white',
            color:'black',
            height:'20px',
            fontSize:'8px',
            margin:'auto',
            marginBottom:'20px'
            }}
        >Register</Button>
        </CardActions>
            </Card>
        </Box>
    );
}

export default TrainingCards;