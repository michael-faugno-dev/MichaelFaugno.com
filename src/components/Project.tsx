import React from "react";
import e7Logo from '../assets/images/e7Logo.png';
import subject64 from '../assets/images/subject64.png';
import discord from '../assets/images/discord.png';
import crossPlatform from '../assets/images/cross-platform.png';
import NJGSO from '../assets/images/NJGSO.jpg';

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects & Collaborations</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/Faugnom1/epic-seven-armory" target="_blank" rel="noreferrer"><img src={e7Logo} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Faugnom1/epic-seven-armory" target="_blank" rel="noreferrer"><h2>Epic Seven Armory</h2></a>
                <p>A companion tool for the popular mobile game Epic Seven. It allows users to upload images of their characters and gear to extract and store key stats. 
                    Using PyTesseract for optical character recognition (OCR), the app decodes information from screenshots and displays it in a clean, user-friendly interface. 
                    The frontend is built with React, while Flask serves as the backend, handling data storage with MongoDB. The tool includes features such as real-time updates, 
                    seamless data fetching, and an intuitive interface for users to configure and showcase their character builds on Twitch as a customizable extension.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Faugnom1/Subject64" target="_blank" rel="noreferrer"><img src={subject64} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Faugnom1/Subject64" target="_blank" rel="noreferrer"><h2>Subject 64</h2></a>
                <p>Subject 64 is a retro-inspired Gameboy-style game created for the GBJAM game development event. This team project focuses on delivering a nostalgic gaming 
                    experience with pixel art, simple yet engaging mechanics, and an eerie Halloween theme. Built in Unity with C#, the game includes custom animations, music, 
                    and art, with controls that replicate the classic Gameboy feel. The gameplay is designed to evoke the charm of old-school games, with spooky environments 
                    and a challenge to escape from Subject 64.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Faugnom1/Discord-Friend-Invite-Generator" target="_blank" rel="noreferrer"><img src={discord} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Faugnom1/Discord-Friend-Invite-Generator" target="_blank" rel="noreferrer"><h2>Discord Friend Invite Generator</h2></a>
                <p>This project is a Python-based tool, created with Electron, that restores a previously removed feature from Discord, allowing users to easily generate 
                    personalized friend invite links. The script automates the creation of multiple Discord invite links, streamlining the process for users who need to invite
                     many friends quickly. By leveraging Discord’s API, the tool securely and efficiently generates bulk invites, making it especially useful for community 
                     managers and event organizers.</p>
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