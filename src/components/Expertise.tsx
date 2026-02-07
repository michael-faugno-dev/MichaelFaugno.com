import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faPython } from '@fortawesome/free-brands-svg-icons';
import { faSchool, faComputer } from '@fortawesome/free-solid-svg-icons'
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
            <h3>Full Stack Software Development</h3>
            <p>
            I build complete web applications that prioritize clarity, performance, and long-term maintainability. 
            My work spans the full development cycle from designing frontend interfaces that support clean, intuitive user experiences, 
            to implementing backend logic, API endpoints, and data models that scale with business needs.
            I’ve worked on both client-facing platforms and internal tools, often bridging gaps between design, development, and deployment. 
            Whether collaborating with a team or working independently, I focus on writing code that is readable, testable, and aligned with real-world user workflows.
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
                I have experience configuring and maintaining secure Windows and Linux environments, setting up internal servers,
                and deploying workstations for business operations.
                My background includes system performance tuning, hardware integration, and end-user support 
                with a focus on stability, efficiency, and meeting real-world organizational needs.
                I’ve also provided hands-on IT support for both individual users and small teams, resolving technical issues quickly 
                to minimize downtime and keep operations running smoothly.
                </p>

            <div className="flex-chips">
              <span className="chip-title">Systems Skills:</span>
              {labelsSys.map((label, index) => (
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
