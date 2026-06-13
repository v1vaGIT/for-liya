import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { useState, useEffect } from 'react';

function Postcard({setStep, roseAmount}) {

    const [targetCount, setTargetCount] = useState(roseAmount);
    const [visibleCount, setVisibleCount] = useState(0);

    useEffect(() => {
    if (!targetCount) return;

    setVisibleCount(0);

    const interval = setInterval(() => {
        setVisibleCount(prev => {
        if (prev >= targetCount) {
            clearInterval(interval);
            return prev;
        }

        return prev + 1;
        });
    }, 50);

    return () => clearInterval(interval);
    }, [targetCount]);

    return (
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
            <Typography variant="h5" component="h2" align='center'>
                Вот вам пиксельный призентик!
            </Typography>
            <Typography variant="body1" color='secondary'>
                К сожалению я все не могу добраться до цветочного в Хабаровске <br/> 
                Но зато я фронтендер и могу сделать сайт который выдаёт пиксельные розочки <br/>
                Держите как и хотели <b>{roseAmount}</b> роз:
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 1,
                    mt: 2
                }}
                >
                {Array.from({ length: visibleCount }).map((_, index) => (
                    <span key={index} style={{ fontSize: '32px' }}>
                    🌹
                    </span>
                ))}
            </Box>
            {
                targetCount === visibleCount &&
                <>
                <Typography variant="body1" color='success'>
                    И что-то есть ещё!
                </Typography>
                <Button  
                    variant='contained'
                    color='secondary'
                    onClick={() => setStep(2)}  
                >
                    Посмотреть что там &#8594;
                </Button>
                <Button  
                    variant='outlined'
                    onClick={() => setStep(0)}
                >
                    Изменить кол-во роз<br/>(да-да, можно и так)
                </Button>
                </>
            }
        </Box>
        </Box>
    )
}

export default Postcard