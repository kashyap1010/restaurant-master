import { Box, Button, Typography } from '@mui/material'
import React from 'react'
// import Button from '@mui/material/Button';
// import AddBoxIcon from '@mui/icons-material/AddBox';
const Card = (props) => {
    return (
        <Box width={'220px'} height={'250px'} borderRadius={'12px'} sx={{ boxShadow: "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px" }} >
            <Box
                height={'50%'}
                sx={{
                    backgroundImage: `url(${props.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: 'center'
                }}
            >
            </Box>
            <Box p={1} >
                <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}
                >
                    <Typography fontSize={'20px'} color={'primary.main'}>{props.name}</Typography>
                    <Typography color={'secondary.main'}>{props.price}$</Typography>
                </Box>
                <Typography variant='caption'>
                {props.description}
                </Typography>
                <Box justifyContent={'flex-end'} display={'flex'} flexDirection={'row'}>
            <Button variant="contained" size='small' sx={{marginX: '3rem', marginTop: '1rem'}}>Add to cart</Button>
            </Box>
            </Box>
        </Box>
    )
}

export default Card
