import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '274px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '16px',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
};

function RoseModal({setStep, setRoseAmount}) {

    const [value, setValue] = useState('');
    const [error, setError] = useState(false);
    const [helperText, setHelperText] = useState('');
    const [showSnack, setShowSnack] = useState(false)

    const handleChange = (e) => {
    const newValue = e.target.value;

    // Разрешаем только цифры
    if (/^\d*$/.test(newValue)) {
        setValue(newValue);
    }
    };

    const validate = () => {
    const num = Number(value);

    if (!value) {
        setError(true);
        setHelperText('Введите число');
        return false;
    }

    if (num < 1 || num > 101) {
        setError(true);
        setHelperText('Число должно быть от 1 до 101. А я говорил, что у меня есть валидации!');
        return false;
    }

    if (num % 2 === 0) {
        setError(true);
        setHelperText('Число должно быть нечётным. А я говорил, что у меня есть валидации!');
        return false;
    }

    setError(false);
    setHelperText('');
    return true;
    };

    const nextStep = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setShowSnack(false)
        setRoseAmount(Number(value))
        setStep(1)
    }

    return (
        <Modal
            open={true}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Введите нечетное число <br/>от 1 до 101
                </Typography>
                <Typography variant='caption' color={'warning'}>
                    *Я проверю, у меня настроены валидации!
                </Typography>
                <TextField
                    label="Сюда вводить"
                    value={value}
                    onChange={handleChange}
                    error={error}
                    helperText={helperText}
                    slotProps={{
                        htmlInput: {
                        inputMode: 'numeric',
                        pattern: '[0-9]*'
                        }
                    }}
                />
                <Button
                    variant="contained"
                    color='secondary'
                    onClick={() => {
                        if (validate()) {
                         setShowSnack(true)
                        }
                    }}
                    >
                    Подтвердить
                </Button>
                <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    open={showSnack}
                    autoHideDuration={2000}
                    onClose={nextStep}
                >
                    <Alert
                        severity="success"
                        variant="filled"
                        sx={{ width: '242px', marginBottom: '14px' }}
                        >
                        Собираю букет...
                    </Alert>
                </Snackbar>
            </Box>
        </Modal>
    )
}

export default RoseModal
