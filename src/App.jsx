import viteLogo from './assets/vite.svg'
import Box from '@mui/material/Box';
import useStore from './components/useStore';
import RoseModal from './components/RoseModal';
import Postcard from './components/Postcard';
import FinalPage from './components/FinalPage';

function App() {

  const {
    step,
    setStep,
    roseAmount,
    setRoseAmount
  } = useStore()

  return (
    <Box sx={{
      backgroundColor: 'grey.700',
      width: '100%',
      minHeight: '100vh',
      paddingBottom: '30px',
      paddingTop: '60px'
    }}> 
      {
        step === 0 &&
        <RoseModal setStep={setStep} setRoseAmount={setRoseAmount}/>
      }
      {
        step === 1 &&
        <Postcard setStep={setStep} roseAmount={roseAmount}/>
      }
      {
        step === 2 &&
        <FinalPage setStep={setStep}/>
      }
    </Box>
  )
}

export default App
