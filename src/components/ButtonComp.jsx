import Button from '@mui/material/Button';

const ButtonComp=(props)=>{
    return(<>
        <Button sx={{
                backgroundColor:props.bg,
                color:props.color,
                borderRadius:'30px',
                marginBottom:'50px',
                padding:'5px',
            }}> {props.text}</Button>
    </>)
};

export default ButtonComp;