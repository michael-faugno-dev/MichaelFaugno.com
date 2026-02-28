import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import Tooltip from '@mui/material/Tooltip';
import '../assets/styles/Footer.scss';

function Footer() {

  return (
    <footer>
      <div className="footer-icons">
        <a href="https://github.com/michael-faugno-dev" target="_blank" rel="noreferrer">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/faugnom1/" target="_blank" rel="noreferrer">
          <LinkedInIcon />
        </a>
        <Tooltip title="Download Resume">
              <a
                href="https://docs.google.com/document/d/1fw5PJMV_GhamnQlWC2IjtK336xTGBGSQOjv36fYqBNQ/export?format=pdf"
                target="_blank"
                rel="noreferrer"
              >
                <PictureAsPdfIcon />
              </a>
            </Tooltip>
      </div>
      <p>Designed by Michael Faugno</p>
    </footer>
  );
}

export default Footer;