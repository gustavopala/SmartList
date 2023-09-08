import './dashboard.css'
import Tabla from '../componentes/Tabla'
import { useState } from 'react';


export default function Dashboard() {
    const [activeButton, setActiveButton] = useState('Acciones'); // Inicialmente, el botón "Acciones" está activo

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };
    return (
        <div className='dashboard-container'>
            <div className='sidebar'>user</div>
        </div>

    )
}








