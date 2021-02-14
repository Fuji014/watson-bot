import React from 'react';

// bootstrap
import {Button} from 'react-bootstrap';

import {Link} from 'react-router-dom';
// imports
import logo from '../../logo.svg';
import '../../App.css';

function Home() {
    return (
        <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <a className="btn btn-success"><Link to="/map">VIEW MAP</Link></a>
        </header> 
        </div>
    )
}

export default Home
