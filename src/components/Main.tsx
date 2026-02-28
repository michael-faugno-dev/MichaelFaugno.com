import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import luna from '../assets/images/profile.jpg';
import '../assets/styles/Main.scss';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import Tooltip from '@mui/material/Tooltip';
import { ReactTyped } from 'react-typed';

function Main() {

const titles = [
  "Solutions Architect",
  "Software Engineer",
  "Game Developer",
  "Infrastructure Engineer",
  "Band Director",
  "Systems Builder",
  "Trumpet Player",
  "Technical Leader"
];



  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={luna} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/michael-faugno-dev" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/faugnom1/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
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
          <a href="https://github.com/michael-faugno-dev" target="_blank" rel="noreferrer"><GitHubIcon/></a>
          <a href="https://www.linkedin.com/in/faugnom1/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
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
        </div>
      </div>
    </div>
  );
}

export default Main;