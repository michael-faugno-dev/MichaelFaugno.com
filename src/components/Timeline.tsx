import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Solutions Architect</h3>
            <h4 className="vertical-timeline-element-subtitle">Townsend Agency — Alexandria, VA</h4>
            <p>
              Infrastructure Architecture, Production Systems, Automation Pipelines, Security & Compliance (NIST 800-171/CMMC), IT Infrastructure Deployment
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sept 2024 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer / Game Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Indie Game Development Team — Remote</h4>
            <p>
              Procedural Generation, Database-Driven Systems (PostgreSQL), Itemization Architecture, Audio Engineering, Cross-Functional Collaboration
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2012 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Director of Bands</h3>
            <h4 className="vertical-timeline-element-subtitle">Rutherford Public Schools — Rutherford, NJ</h4>
            <p>
              Team Leadership, Curriculum Design, Public Performances, Staff Training, Scheduling, Event Management, Student Engagement
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineering Fellow</h3>
            <h4 className="vertical-timeline-element-subtitle">Springboard — Remote</h4>
            <p>
              Frontend Development, Backend Development, User Experience, Database Management, Data Structures, Algorithms
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2016 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Head Coach — Swimming</h3>
            <h4 className="vertical-timeline-element-subtitle">Rutherford, NJ</h4>
            <p>
              Athlete Development, Performance Analysis, Team Building, Competitive Strategy, Logistics Planning, Leadership Under Pressure
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;