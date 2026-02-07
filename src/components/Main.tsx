import React, { useState, useEffect } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import discordIcon from '../assets/discord.png';
import discordIconHover from '../assets/discord-hover.png';
import luna from '../assets/images/profile.jpg';
import '../assets/styles/Main.scss';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import Tooltip from '@mui/material/Tooltip';
import { ReactTyped } from 'react-typed';

function Main() {
  const [discordLink, setDiscordLink] = useState(
    "https://discordapp.com/users/mikeyfogs"
  );



  async function createInvite() {
    const url = "https://discord.com/api/v9/users/@me/invites";
    const headers = {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; rv:103.0) Gecko/20100101 Firefox/103.0",
      Accept: "*/*",
      "Accept-Language": "en,sk;q=0.8,cs;q=0.5,en-US;q=0.3",
      "Content-Type": "application/json",
      Authorization: TOKEN,
      "X-Discord-Locale": "en-US",
      "X-Debug-Options": "bugReporterEnabled",
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "same-origin",
      "Sec-GPC": "1",
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify({}),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }

      const inviteData = await response.json();
      const inviteLink = `https://discord.gg/${inviteData.code}`;
      return inviteLink;
    } catch (error) {
      console.error("An error occurred:", error);
      return null;
    }
  }
  const handleDiscordClick = async () => {
    try {
      const inviteLink = await createInvite();
      if (inviteLink) {
        setDiscordLink(inviteLink);
        window.open(inviteLink, "_blank", "noopener,noreferrer");
        console.log(inviteLink);
      } else {
        console.error("Failed to fetch invite link");
      }
    } catch (error) {
      console.error("Error fetching invite link:", error);
    }
  };

const titles = [
  "Full Stack Engineer",     
  "Educator",                
  "Solutions Architect",     
  "Band Director",          
  "Software Developer",      
  "Trumpet Player",           
  "Team Leader"               
];



  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={luna} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/faugnom1" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/faugnom1/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
              <Tooltip title="Download Resume">
              <a
                href="https://docs.google.com/document/d/1dkzohtEX4VBKjLuPa3hb7YN8afLnWhCgr5BC9fv8KEw/export?format=pdf"
                target="_blank"
                rel="noreferrer"
              >
                <PictureAsPdfIcon />
              </a>
            </Tooltip>
            <a href={discordLink} target="_blank" rel="noopener noreferrer" onClick={handleDiscordClick}>
              <div className="discord-icon-wrapper">
                <img src={discordIcon} alt="Discord" className="discord-icon"/>
                <img src={discordIconHover} alt="Discord" className="discord-icon hover"/>
              </div>
            </a>

          </div>
          <h1>Michael Faugno</h1>
          <p className="typed-title">
            <ReactTyped
              strings={titles}
              typeSpeed={60}
              backSpeed={40}
              loop
            />
          </p>

          <div className="mobile_social_icons">
          <a href="https://github.com/faugnom1" target="_blank" rel="noreferrer"><GitHubIcon/></a>
          <a href="https://www.linkedin.com/in/faugnom1/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          <Tooltip title="Download Resume">
              <a
                href="https://docs.google.com/document/d/1dkzohtEX4VBKjLuPa3hb7YN8afLnWhCgr5BC9fv8KEw/export?format=pdf"
                target="_blank"
                rel="noreferrer"
              >
                <PictureAsPdfIcon />
              </a>
            </Tooltip>
            <a href={discordLink} target="_blank" rel="noopener noreferrer" onClick={handleDiscordClick}>
              <div className="discord-icon-wrapper">
                <img src={discordIcon} alt="Discord" className="discord-icon"/>
                <img src={discordIconHover} alt="Discord" className="discord-icon hover"/>
              </div>

            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;