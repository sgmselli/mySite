import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css'


class Home extends React.Component {

    render() {
        return (
            <div className="Home">
                <div>
                    <img src={window.location.origin + "/images/headshot.jpg"} alt="headshot" />
                </div>
                <div className="indexDets">
                    <h4>SOFTWARE DEVELOPER</h4>
                    <h1>Matt Sellings.</h1>

                    <h2>Computer Science @ University of Liverpool. Incoming software engineer intern at Publis Sapient.<br />Experienced freelance Web Developer.</h2>
                    <Link to="/Resume">
                        <button>My Resumé</button>
                    </Link>
                </div>
                
                
            </div>
        )
    }
}

export default Home;