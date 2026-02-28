import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faPython } from '@fortawesome/free-brands-svg-icons';
import { faSchool, faComputer, faGamepad } from '@fortawesome/free-solid-svg-icons'
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsDev = [
  "React",
  "TypeScript",
  "JavaScript",
  "Flask",
  "Python",
  "HTML",
  "CSS",
  "C#",
  "Java",
  "MongoDB",
  "PostgreSQL",
  "REST APIs",
  "OAuth",
  "AWS",
  "Git",
  "CI/CD",
  "Electron",
];

const labelsGame = [
  "Unity",
  "C#",
  "PostgreSQL",
  "Procedural Generation",
  "Database Design",
  "Audio Engineering",
  "Game Systems",
  "Electron",
  "OCR/Image Recognition",
  "Cross-Platform Development",
  "Team Collaboration",
  "Version Control"
];

const labelsEdu = [
  "Leadership",
  "Public Speaking",
  "Team Coordination",
  "Mentorship",
  "Lesson Planning",
  "Event Management",
  "Ensemble Direction",
  "Classroom Technology",
  "Student Engagement",
  "Curriculum Design",
  "Conflict Resolution",
  "Scheduling"
];

const labelsSys = [
  "PC Building",
  "Windows Optimization",
  "System Troubleshooting",
  "Networking",
  "Custom Hardware",
  "IT Support",
  "Performance Tuning",
  "Cost-Efficiency",
  "Security Awareness",
  "Component Selection",
  "Peripheral Setup",
  "Software Deployment"
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Solutions Architecture & Software Engineering</h3>
            <p>
            I design and build production systems that organizations rely on to operate effectively. 
            My work spans infrastructure architecture, full-stack application development, and automation that improves reliability, security, and operational efficiency.
            I operate with broad technical ownership — from early architectural decisions through deployment — delivering scalable solutions in fast-moving environments.
            My experience includes internal operational platforms, database-driven applications, workflow automation, and cross-platform software. 
            I focus on building systems that are maintainable, secure, and aligned with real organizational needs.
            </p>

            <div className="flex-chips">
              <span className="chip-title">Technologies:</span>
              {labelsDev.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </div>

            <div className="skill">
                <FontAwesomeIcon icon={faSchool} size="3x" />
                <h3>Music, Education & Leadership</h3>
                <p>
                With over a decade as a Band Director and a performing trumpet player, 
                I've led concert bands, jazz bands, marching bands, orchestras, small ensembles, and lesson groups from grades 4 to 12. 
                I've organized numerous full-scale events, supported student growth across skill levels, 
                and guided junior staff in instructional and logistical planning.
                My classroom experience sharpened my leadership, communication, and scheduling skills,
                all of which I carry into collaborative technical teams and training environments.
                </p>

                <div className="flex-chips">
                <span className="chip-title">Skills:</span>
                {labelsEdu.map((label, index) => (
                    <Chip key={index} className='chip' label={label} />
                ))}
                </div>
            </div>

          <div className="skill">
            <FontAwesomeIcon icon={faComputer} size="3x" />
            <h3>Systems & IT Optimization</h3>
                <p>
                Production IT infrastructure is critical to daily operations, and my work focuses on building environments organizations can depend on.
                I design, deploy, and maintain servers, network architecture, workstation environments, and security policies.
                My work includes system performance tuning, access controls, disaster recovery planning, and end-user support with a focus on operational reliability and business continuity.
                I've configured Windows and Linux systems, deployed internal servers, and provided technical support to minimize downtime and maintain system availability.
                </p>

            <div className="flex-chips">
              <span className="chip-title">Systems Skills:</span>
              {labelsSys.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faGamepad} size="3x" />
            <h3>Game Development & Technical Projects</h3>
                <p>
                As a core developer on an indie game team, I build gameplay systems, procedural generation frameworks, and database-driven architectures for interactive experiences.
                I've designed itemization systems, skill trees, and progression mechanics while engineering integrated audio systems aligned with gameplay feedback.
                I also compose and produce original music and sound effects for game projects, integrating audio directly into gameplay to enhance player experience.
                I've shipped projects using Unity, PostgreSQL, Electron, and OCR/image-recognition systems — collaborating with designers, artists, and other engineers to deliver polished, performant software.
                </p>

            <div className="flex-chips">
              <span className="chip-title">Game Dev Skills:</span>
              {labelsGame.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;