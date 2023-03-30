import { Button, Slider } from '@mui/material'
import face from '../assets/face.png'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useMemo } from 'react'

const Verification = ({setStep,positionWidth,setPositionWidth,positionHeight,setPositionHeight}) => {
    const isSuccess = useMemo(()=>(positionWidth >= 550 && positionWidth <= 560) && (positionHeight >= 225 && positionHeight <= 235))
    const submitStep = ()=>{
        if(setStep){
            setStep(2)
        }else{
            alert("hint : You entered the correct password, but it look like there's something wrong in your function please check the props")
        }
    }
    
  return (
    <Box>
        <Typography  variant='h2' >Please, move P'Tine into the Box</Typography>
        
        <Box border={"1px solid"} borderColor="chocolate" width={"900px"} height="400px" position={"relative"} >
        <img src={face} width="100px"  height="100px" style={{position:"absolute",left:positionWidth,top:positionHeight,zIndex:2}} />
        <Box width={"100px"} position="absolute" left={553} top={230} bgcolor={"red"} height="100px" />
        </Box>
        <Slider sx={{marginTop:10}} value={positionWidth}  min={0} max={900} onChange={(e,v)=>setPositionWidth(v)} />
        <Slider value={positionHeight}  min={0} max={400} onChange={(e,v)=>setPositionHeight(v)} />

        <Box height={50} display={"flex"}>
        { isSuccess && <Button onClick={()=>submitStep()} variant='contained'  sx={{width:"fit-content",margin:"auto",marginTop:5}} size='large'>Verify !</Button>}
        </Box>
    </Box>
  )
}

export default Verification