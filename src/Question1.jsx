import React, { useState } from 'react'
import {Box} from '@mui/material'
import Password from './components/Password'
import Verification from './components/Verification'

import Party from './Question2'

const Question = () => {
    const [step,setStep] = useState(0)
    const [positionWidth,setPositionWidth] = useState(0)
    const [positionHeight,setPositionHeight] = useState(0)
  return (
    <Box display={"flex"} flexDirection="column" width={"100vw"} height={"100vh"} justifyContent={"center"} alignItems={"center"}>
      {step === 0 && <Password setStep={setStep} />}
      {step === 1 && <Verification 
      positionWidth={positionWidth} setPositionWidth={setPositionWidth}
      positionHeight={positionHeight} setPositionHeight={setPositionHeight}
      setStep={setStep}
       />}
      {step === 2 && <Party/>}
      
    </Box>
  )
}

export default Question