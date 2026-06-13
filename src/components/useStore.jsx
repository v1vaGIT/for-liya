import { useState } from 'react'

function useStore() {
    
    const [step, setStep] = useState(0);
    const [roseAmount, setRoseAmount] = useState(1);

    return {
        step,
        setStep,
        roseAmount,
        setRoseAmount
    }
}

export default useStore