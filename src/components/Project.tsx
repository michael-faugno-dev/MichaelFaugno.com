import React from "react";
import e7Logo from '../assets/images/e7Logo.png';
import NJGSO from '../assets/images/NJGSO.jpg';
import pantryMonitortop from '../assets/images/pantry-monitor-top.jpg';
import pantryMonitorbottom from '../assets/images/pantry-monitor-bottom.jpg';
import siftMatching from '../assets/images/sift1.png';

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects & Collaborations</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/michael-faugno-dev/EpicSevenArmory" target="_blank" rel="noreferrer"><img src={e7Logo} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/michael-faugno-dev/EpicSevenArmory" target="_blank" rel="noreferrer"><h2>Epic Seven Armory</h2></a>
                <p>A cross-platform desktop application built with Electron, React, Flask, and MongoDB to catalog game units with real-time stat tracking. 
                    Implements secure Google OAuth authentication with JWT-based session management and an OCR/SIFT image-recognition pipeline to parse screenshots and sync structured data into the database.
                    Includes an integrated Twitch overlay system enabling live unit-selection visibility within streaming environments.</p>
            </div>
            <div className="project">
            <div className="project-image-hover">
                <a href="https://github.com/michael-faugno-dev/PantryScanner" target="_blank" rel="noreferrer">
                    <img src={pantryMonitortop} className="zoom image-default" alt="Pantry Dashboard - Stats" width="100%"/>
                    <img src={pantryMonitorbottom} className="zoom image-hover" alt="Pantry Dashboard - Inventory" width="100%"/>
                </a>
            </div>
                <a href="https://github.com/michael-faugno-dev/PantryScanner" target="_blank" rel="noreferrer"><h2>AI-Powered Pantry Monitor</h2></a>
                <p>An automated inventory tracking system using webcam capture, Claude vision analysis, and PostgreSQL integration. 
                The system captures daily images, uses AI to detect changes in pantry items, and maintains a real-time database of inventory with quantity tracking and change history. 
                Built with Python, Flask, and PostgreSQL, featuring a web dashboard for monitoring stock levels, API cost tracking, and automated detection of added/removed items.</p>
            </div>
            <div className="project">
                <a href="https://github.com/michael-faugno-dev/e7SiftMatching" target="_blank" rel="noreferrer"><img src={siftMatching} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/michael-faugno-dev/e7SiftMatching" target="_blank" rel="noreferrer"><h2>SIFT Image Recognition Pipeline</h2></a>
                <p>A computer vision pipeline implementing Scale-Invariant Feature Transform (SIFT) for automated image matching and recognition. 
                Developed as the core matching engine for Epic Seven Armory, this system detects and matches game character portraits from screenshots with high accuracy. 
                Uses OpenCV for feature extraction and matching, enabling recognition despite variations in scale, rotation, and lighting conditions.</p>
            </div>
            <div className="project">
                <a href="https://www.youtube.com/@NewJerseyGSO" target="_blank" rel="noreferrer"><img src={NJGSO} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.youtube.com/@NewJerseyGSO" target="_blank" rel="noreferrer"><h2>New Jersey Gamer Symphony Orchestra </h2></a>
                <p>I perform as a trumpet player in the New Jersey Gamer Symphony Orchestra, New Jersey's premiere community-based video game music orchestra & choir, established in 2014.
                    We combine musicianship with a shared passion for gaming culture. All of our music is arranged by orchestra members, showcasing the creativity and 
                    talent across the group. Our performances are featured on YouTube and celebrate both classic and modern soundtracks.
 </p>
            </div>
        </div>
    </div>
    );
}

export default Project;