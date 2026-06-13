import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import gifka from '../assets/kiss.gif';
import LockIcon from '@mui/icons-material/Lock';
import Snackbar from '@mui/material/Snackbar';

import { useState } from 'react';

function FinalPage({setStep}){

    const [showSnack, setShowSnack] = useState(false)
    
    return (
        <>
        <Box sx={{
            padding: '16px', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center'
        }}
        >
        <Box
          sx={{
            width: 'calc(100% - 32px)',
            maxWidth: '445px',
            borderRadius: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            boxShadow: 24,
            bgcolor: 'background.paper',
            padding: '16px'
          }}
        >
            <Button  
                variant='text'
                onClick={() => setStep(1)}
                sx={{width: '180px', padding: '0'}}
            >
                &#8592; Вернуться назад
            </Button>
            <Box></Box>

                <Typography variant="body1">
                    Хорошего дня! 🌸
                </Typography>

                <Link href="https://www.instagram.com/reel/DMr8N4Cy-fM/?igsh=MTgwdHI0MmNqNWhlOQ==" target="_blank">Вот кстати ссылочка на уматный видос в инстраграмме</Link>

                <Box
                    component="img"
                    src={gifka}
                    alt="gif"
                    sx={{ width: "100%" }}
                />
            <Box></Box>
            <Button  
                variant='contained'
                color='secondary'
                onClick={() => setStep(0)}
            >
                Вернуться в начало
            </Button>
        </Box>
        </Box>
        </>
    )
}

export default FinalPage