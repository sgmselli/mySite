import React from 'react';
import './Resume.css'

class Resume extends React.Component {
    render() {
        return(
            <div className="Resume" >
                <div className="container">
                    <h1>Resumé.</h1>
                    <div>
                        <img src={window.location.origin + "/images/CV.jpg"} alt="CV" />
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Resume;