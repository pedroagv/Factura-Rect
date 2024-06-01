import React, { useEffect } from 'react';

function Notificacion({ tipo, mensaje, visible, setVisible }) {
    useEffect(() => {
        if (visible) {
            const timer = setTimeout(() => {
                setVisible(false);
            }, 3000);
            return () => clearTimeout(timer); // Cleanup the timer on component unmount
        }
    }, [visible, setVisible]);

    if (!visible) {
        return null;
    }

    return (
        <div className={`alert alert-${tipo}`} role="alert">
            {mensaje}
        </div>
    );
}

export default Notificacion;
