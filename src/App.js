import logo from './media/images/PhillLogo.png';
import bgImg from './media/bg_images/leaves-2.jpg';
import './styles/App.css';
import React, { useState } from 'react';
import {KeyboardArrowRight} from "@mui/icons-material";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ContactPane from './components/contact_pane/contact_pane.jsx';
import {Grid} from '@mui/material';

function App() {

    const [selectedOption, setSelectedOption] = useState('Home');
    const [fade, setFade] = useState(false);

    const handleOptionClick = (option) => {
        setFade(true);
        setTimeout(() => {
            setSelectedOption(option);
            setFade(false);
        }, 500);
    };

    const renderContent = () => {
        switch (selectedOption) {
            case 'Contact':
                return <div className="selected-content">
                    <p>
                        <h2 className="selected-content-title">About me.</h2>
                        <ContactPane></ContactPane>
                    </p>
                </div>;
            case 'Experience':
                return <div className="selected-content">
                    <p>
                        <h2 className="selected-content-title">My Experience.</h2>
                    </p>
                </div>;
            case 'My Work':
                return <div className="selected-content">
                    <p>
                        <h2 className="selected-content-title">My Work.</h2>
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
        <Grid container className={"container"} direction={{ xs: "column", md: "row" }} >
            {/* left-panel (10/12) */}
            <Grid item xs={8} md={10} className={"left-panel"}
                  style={{backgroundImage: `url(${bgImg})`}}
            >
                <div className={`content ${fade ? 'fade' : ''}`}>
                    {renderContent()}
                </div>
            </Grid>

            {/* right-panel (2/12) */}
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
