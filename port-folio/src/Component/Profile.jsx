import React from 'react'
import profilePic from '../assets/profile-pic.jpeg'
import linkedinIcon from '../assets/linkedin.png'
import githubIcon from '../assets/github.png'
import RV from '../assets/resume.png';
export default function Profile() {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src={profilePic} alt="John Doe profile picture" style={{borderRadius:"50%"}} />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Karan Trivedi</h1>
        <p className="section__text__p2">Full-Stack Developer</p>
        <div className="btn-container">
         
        <a href={RV} download>
          <button class="btn btn-color-2">Download CV</button>
        </a>
          <a
            class="btn btn-color-1"
            href="https://mail.google.com/mail/u/0/#inbox"
          >
            Contact Info
          </a>
        </div>
        <div id="socials-container">
         <a href="https://www.linkedin.com/feed/">
          <img
            src={linkedinIcon}
            alt="My LinkedIn profile"
            className="icon"
            onclick="location.href='https://linkedin.com/'"
          />
          </a>
          <a href="https://github.com/">
          <img
            src={githubIcon}
            alt="My Github profile"
            className="icon"
            onclick="location.href='https://github.com/'"
          />
          </a>
        </div>
      </div>
    </section>
  )
}
