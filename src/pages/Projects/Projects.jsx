import React from 'react';
import Popup from '../../components/Popup/Popup';

import './Projects.css'

const algoProj = {
    title: 'Shortest Path Finder Visualiser',
    demo: 'algorithmDemo',
    vidSize: 300,
    date: 'June 2022',
    description: "A shortest path finder, using Dijkstra's algorithm.",
    languages: ['Python', 'Tkinter'],
}

const confessProj = {
    title: 'Livconfessions',
    demo: 'ConfessionsDemo',
    vidSize: 550,
    date: 'June 2022 - September 2022',
    description: 'LiverConfessions! A social media built for universities in Liverpool, allowing students to post confessions aboout their daily life at uni.',
    languages: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript', 'SQlite' ],
}

const checkblockProj = {
    title: 'RoyalHackerway hackerthon - CheckBlock',
    demo: 'CheckBlockDemo',
    vidSize: 500,
    date: 'February 2023',
    description: 'CheckBlock! A todo list application that interacts with a smart contract deployed on the Ethereum Blockchain, using the Goerli test network.',
    languages: ['ReactJS', 'Web3JS', 'Truffle', 'MetaMask', 'HTML', 'CSS'],
}

const YoutubeProj = {
    title: 'Youtube Downloader',
    demo: 'YoutubeDemo',
    vidSize: 500,
    date: 'May 2022',
    description: "Input the artist, song, and directory you want to save your song to, then you're listen.",
    languages: ['Python', 'Tkinter', 'Youtube API' ],
}

class Projects extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: [checkblockProj, confessProj, algoProj, YoutubeProj]
        }
    }

    render() {
        return (
            <div className="Projects">
                <div className='container'>
                    <div className='new'>
                        <h1>Projects.</h1>
                    </div>
                    <div >
                        <ProjectList projects={this.state['projects']}/>
                    </div>
                </div>                  
               
            </div>
        )
    }
}

class ProjectList extends React.Component {

    render() {
        return (
            <div className='list'>
                {(this.props.projects).map((project, uuid) => {
                    return <Project project={project} key={uuid} />
                })}
            </div>
        )
    }
}

class Project extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.popup = this.popup.bind(this);
        this.close = this.close.bind(this);
    }

    popup() {
        this.setState({open: true});
    }

    close() {
        this.setState({open: false});
    }

    render() {
        return (
            
            <div>
                {(this.state['open'] === true) ? 
                    <Popup demo={this.props.project.demo} project={this.props.project} close={this.close} /> 
                : 
                 
                    <div className="ProjectWindow" onClick={this.popup}>
                        <div className='ProjectInfo'>
                            <h2>{this.props.project.title}</h2>
                        
                            <h3>{this.props.project.date}</h3>
                        </div>
                    </div>                    
                }                
            </div>
        )
    }
}

export default Projects;