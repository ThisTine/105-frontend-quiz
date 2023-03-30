import { Box,Typography } from '@mui/material'
import React, { useRef } from 'react'
import Confetti from 'react-confetti'

const Party = () => {
  const ref = useRef()
  return (
    <Box display={"flex"} flexDirection="column" ref={ref} justifyContent={"center"} alignItems="center" width="100vw" height="100vh" overflow="hidden">
        <Confetti width={ref?.current?.offsetWidth} height={ref?.current?.offsetHeight} />
        <Typography component="h1" variant='h1'>Congratulation you've passed !</Typography>
    </Box>
  )
}

export default Party