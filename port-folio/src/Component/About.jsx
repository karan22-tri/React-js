import React from 'react'
import aboutPic from '../assets/about-pic.jpeg'
import experienceIcon from '../assets/experience.png'
import educationIcon from '../assets/education.png'
import arrowIcon from '../assets/arrow.png'

export default function About() {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img
            src={aboutPic}
            alt="Profile picture"
            className="about-pic"
            style={{ borderRadius: "45%" }}
          />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img
                src={experienceIcon}
                alt="Experience icon"
                className="icon"
              />
              <h3>Experience</h3>
              <p>1+ years <br />Full-Stack Development</p>
            </div>
            <div className="details-container">
              <img
                src={educationIcon}
                alt="Education icon"
                className="icon"
              />
              <h3>Education</h3>
              <p>B.com Bachelors Degree<br />Running...</p>
            </div>
          </div>
          <div className="text-container">
            <p style={{fontFamily:"initial"}}>
              As a Full Stack Developer, 
              I create responsive web applications using React.js for front-end and Node.js, Express, MongoDB 
              for back-end and add more functionality like a Boostrap, MUI, Framework etc.
               ensuring seamless integration, scalability, and security across the entire stack for efficient, user-friendly applications.
            </p>
          </div>
        </div>
      </div>
      <a href="#experience">  <img
        src={arrowIcon}
        alt="Arrow icon"
        className="icon arrow"
      /></a>
    </section>
  )
}
