import React from 'react';
import './About.css';

class About extends React.Component {

    render() {
        return (
            <div className="About">
                <div className='introduction'>
                    <div className='titleAbout'>
                        <h1>Hi, I'm Matt Sellings.</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#44546A" className="bi bi-laptop" viewBox="0 0 16 16">
                            <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
                        </svg>
                    </div>
                    
                    <h3>I'm a penultimate year <mark>Mathematics and Computer Science student</mark>, studying at the University of Liverpool, an incoming <mark>software engineer summer intern</mark> 2023, as well as an experienced <mark>freelance web developer.</mark> </h3>
                </div>

                <div className='Skills'>
                    <h2>Development areas. </h2>
                    <ul>
                        <li>Full stack</li>
                        <li>dApp</li>
                        <li>Data science</li>
                        <li>AI and Machine Learning</li>
                    </ul>
                </div>

                <div className='Languages'>
                    <h2>Languages. </h2>
                    <ul>
                        <li>Python</li>
                        <li>Java</li>
                        <li>R</li>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </div>

                <div className='Links'>
                    <h2>Links. </h2>
                    <ul>
                        <li>
                            GitHub
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                            </svg>
                        </li>
                        <li>
                            LinkedIn 
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                            </svg>
                        </li>
                        <li>
                            Leetcode
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                            </svg>
                        </li>
                    </ul>
                </div>


            </div>
        )
    }
}

export default About;