import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faVideo, faMapMarkerAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/BrassLessons.scss';

function BrassLessons() {
  return (
    <div className="brass-lessons-section" id="lessons">
      <h1>Private Brass Lessons</h1>
      
      <div className="lessons-intro">
        <p>
          Looking to improve your trumpet or brass playing? I offer private lessons for students of all ages and skill levels. 
          Whether you're preparing for auditions, developing fundamentals, or just beginning your musical journey, 
          lessons are tailored to each student's individual goals.
        </p>
      </div>

      <div className="lessons-features">
        <div className="feature">
          <FontAwesomeIcon icon={faMusic} size="3x" />
          <h3>All Skill Levels</h3>
          <p>From complete beginners to advanced players preparing for college auditions and professional opportunities.</p>
        </div>

        <div className="feature">
          <FontAwesomeIcon icon={faMapMarkerAlt} size="3x" />
          <h3>In-Person & Remote</h3>
          <p>Local lessons in North Jersey and NYC Metro area, or convenient Zoom sessions for students anywhere.</p>
        </div>

        <div className="feature">
          <FontAwesomeIcon icon={faCalendarAlt} size="3x" />
          <h3>Flexible Scheduling</h3>
          <p>Lesson times that work with your schedule, including evenings and weekends.</p>
        </div>
      </div>

      <div className="lessons-approach">
        <h2>Teaching Approach</h2>
        <p>
          My approach combines strong fundamentals with engaging, practical exercises to build confidence, range, and musicality. 
          With over a decade of experience as a Band Director and performing trumpet player, 
          I bring both pedagogical expertise and real-world performance insight to every lesson.
        </p>
        <p className="approach-cta">
          Interested in lessons? Reach out via the contact form below or connect through the social links to inquire about availability and rates.
        </p>
      </div>
    </div>
  );
}

export default BrassLessons;