import { Box } from '@mui/system'
import React from 'react'
import Navbar from '../Navbar'
import Menu from './Menu'
import Category from './Category'


const Home = () => {


  return (
    <Box display={'flex'} flexDirection={'column'}>
      <Navbar />
      <Category />
    </Box>
  )
}

export default Home