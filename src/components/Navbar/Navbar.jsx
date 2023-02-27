import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css'
 
class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            width: document.body.clientWidth
        }
        this.windowWidth = this.windowWidth.bind(this);
    }

    windowWidth() {
        this.setState({width: document.body.clientWidth})
        
    }

    showMenu() {
        
        (document.getElementById("drop").style.display === "none") 
        ? document.getElementById("drop").style.display = "block" 
        : document.getElementById("drop").style.display = "none";
 

    }

    render() {

        window.onresize = this.windowWidth;

        let pages = '';

        (this.state['width'] > 950) ?
            pages = (
                <ul className="menu">
                    <li>
                        <Link to='/About'>
                            <button>About</button>
                        </Link>
                    </li>
                    <li>
                        <Link to='/Resume'>
                            <button>Resumé</button>
                        </Link>
                    </li>
                    <li>
                        <Link to='/Projects'>
                            <button>Projects</button>
                        </Link>
                    </li>
                </ul>
            )
            
        :
            pages = (
                <div className="dropdown">

                    <div class="dropdownMenu" id="drop">
                        <ul>
                        <Link to='/About' style={{textDecoration: 'none'}}>
                                <li>
                                    <h2>About</h2>
                                    <hr />
                                </li>
                            </Link>
                            
                            <Link to='/Resume' style={{textDecoration: 'none'}}>
                                <li>
                                
                                    <h2>Resumé</h2>
                                
                                <hr />
                                </li>
                            </Link>
                            <Link to='/Projects' style={{textDecoration: 'none'}}>
                                <li>
                                    <h2>Projects</h2>
                                </li>
                            </Link>
                        </ul>
                    </div>

                    <svg onClick={this.showMenu} xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                    </svg>

                
                </div>
                

            )

            return (
                <div className="Navbar">
                    <div className="Title">
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <div className="link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#44546A" className="bi bi-laptop" viewBox="0 0 16 16">
                                    <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
                                </svg>
                                <h4>Matt Sellings.</h4>
                            
                            </div>
                        </ Link>
                    </div>
                    <div className="Pages">
                        {pages}
                    </div>
                </div>
            );
    }
}

export default Navbar;