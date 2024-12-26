/*import React, { useState, useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import ProgressBar from 'react-bootstrap/ProgressBar';

const CuentaAtras = ({ onComplete }) => {
    const [inputValue, setInputValue] = useState("");
    const [countdownValue, setCountdownValue] = useState(null);
    const [completed, setCompleted] = useState(false); // Bandera para evitar múltiples ejecuciones de onComplete
    const endTime = useRef(null);

    useEffect(() => {
        let animationFrame;

        const updateCountdown = () => {
            if (endTime.current) {
                const now = new Date().getTime();
                const remainingTime = Math.max(0, endTime.current - now);
                setCountdownValue(Math.ceil(remainingTime / 1000));

                if (remainingTime <= 0 && !completed) {
                    onComplete();
                    setCompleted(true); // Marcar como completado
                } else {
                    animationFrame = requestAnimationFrame(updateCountdown);
                }
            }
        };

        if (countdownValue !== null && countdownValue > 0) {
            animationFrame = requestAnimationFrame(updateCountdown);
        }

        return () => cancelAnimationFrame(animationFrame);
    }, [countdownValue, onComplete, completed]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const startCountdown = () => {
        if (inputValue && !isNaN(inputValue)) {
            const currentTime = new Date().getTime();
            endTime.current = currentTime + Number(inputValue) * 1000;
            setCountdownValue(Number(inputValue));
            setCompleted(false); // Restablecer la bandera cuando se inicie una nueva cuenta atrás
        }
    };

    return (
        <div className="text-center">
           
            <button className="btn btn-warning mt-2" onClick={startCountdown}>
                Iniciar Cuenta Atrás
            </button>
            <input
                type="number"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Introduce tiempo en segundos"
            />
            {countdownValue !== null && (
                <div className="mt-3">
                    <ProgressBar now={countdownValue} max={inputValue} />
                    <div>{countdownValue} segundos restantes</div>
                </div>
            )}
        </div>
    );
};

CuentaAtras.propTypes = {
    onComplete: PropTypes.func.isRequired,
};

export default CuentaAtras;
*/