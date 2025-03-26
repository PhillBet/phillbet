import logo from './media/images/PhillLogo.png';
import bgImg from './media/bg_images/leaves-2.jpg';
import './styles/App.css';
import React, { useState } from 'react';
import {KeyboardArrowRight} from "@mui/icons-material";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ConsolePane from './components/console_pane/console_pane.jsx';
import {Grid} from '@mui/material';

function App() {

    // Define el estado que controla qué contenido mostrar en el panel izquierdo
    const [selectedOption, setSelectedOption] = useState('Home');
    const [fade, setFade] = useState(false); // Estado para controlar el fade

    // Función para cambiar el contenido del panel izquierdo según la opción seleccionada
    const handleOptionClick = (option) => {
        setFade(true); // Activar el fade cuando se selecciona una opción
        setTimeout(() => {
            setSelectedOption(option);
            setFade(false); // Desactivar el fade después de que el contenido haya cambiado
        }, 500); // Duración del fade (500ms)
    };

    // Contenido para cada opción
    const renderContent = () => {
        switch (selectedOption) {
            case 'Contact':
                return <div className="selected-content">
                    <p>
                        <h2>About me.</h2>
                        <ConsolePane></ConsolePane>
                    </p>
                </div>;
            case 'Experience':
                return <div className="selected-content">
                    <p>
                        <h2>My Experience.</h2>
                    </p>
                </div>;
            case 'My Work':
                return <div className="selected-content">
                    <p>
                        <h2>My Work.</h2>
                    </p>
                </div>;
            case 'Home':
                return<div>
                    {/*<h1>PHILL BET</h1>*/}
                    <p>
                        <img src={logo} className="App-logo" alt="logo"/>
                    </p>
                </div>;
            default:
                return<div>
                    <h1>204 No Content</h1>
                    <p>
                        Something went wrong. How did you requested this option?
                    </p>
                </div>;
        }
    };
    return (
        <Grid container className={"container"} direction={{ xs: "column", md: "row" }}
              // style={{backgroundImage: `url(${bgImg})`}}
        >
            {/* Panel izquierdo (10/12) */}
            <Grid item xs={8} md={10} className={"left-panel"}
                  style={{backgroundImage: `url(${bgImg})`}}
            >
                <div className={`content ${fade ? 'fade' : ''}`}>
                    {renderContent()}
                </div>
            </Grid>

            {/* Panel derecho (2/12) */}
            <Grid item xs={4} md={2} className={"right-panel"}>
                <Grid item container direction={{ xs: "row", md: "column" }} className={"right-container"}>
                    <Grid item xs={1} md={1} style={{backgroundColor:"transparent"}} className={"right-item-0"}>
                        {/*<p>Header</p>*/}
                    </Grid>
                    <Grid item xs={5} md={5} style={{backgroundColor:"transparent"}} className={"right-item-1"}>
                        <h2 className={"homeLabel"}
                            onClick={() => selectedOption !== 'Home'
                                && handleOptionClick('Home')}
                        >
                            <HomeRoundedIcon className={selectedOption === 'Home' ? 'disabledHome' : 'Home'}
                                             fontSize={"small"}/>
                            PHILL BET
                        </h2>
                    </Grid>
                    <Grid item xs={5} md={5} style={{backgroundColor:"transparent"}} className={"right-item-2"}>
                        <ul>
                            <li onClick={() => selectedOption !== 'Contact'
                                && handleOptionClick('Contact')}
                                className={selectedOption === 'Contact' ? 'disabled' : ''}
                            >
                                <KeyboardArrowRight fontSize="large" className='icon' />
                                Contact
                            </li>
                            <li onClick={() => selectedOption !== 'Experience'
                                && handleOptionClick('Experience')}
                                className={selectedOption === 'Experience' ? 'disabled' : ''}
                            >
                                <KeyboardArrowRight fontSize="large" className='icon' />
                                Experience
                            </li>
                            <li onClick={() => selectedOption !== 'My Work'
                                && handleOptionClick('My Work')}
                                className={selectedOption === 'My Work' ? 'disabled' : ''}
                            >
                                <KeyboardArrowRight fontSize="large" className='icon' />
                                My Work
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={1} md={1} style={{backgroundColor:"transparent"}} className={"right-item-3"}>
                        {/*<p>Footer</p>*/}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default App;
