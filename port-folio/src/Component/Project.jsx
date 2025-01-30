import React from 'react'
import arrowIcon from '../assets/arrow.png'
import project1 from '../assets/project-1.png'
import project2 from '../assets/project-2.png'
import project3 from '../assets/project-3.png'

export default function Project() {
  return (
    
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={project1}
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Project One</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
              >
                <a href="https://github.com/karan22-tri/JavaScript/tree/main/Burger-20240423T091028Z-001/Burger"></a>
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
               onclick="https://hoisting-demo.web.app/"
              >
                Live Demo
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={project2}
                alt="Project 2"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Project Two</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Live Demo
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={project3}
                alt="Project 3"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Project Three</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      <a href="#contact">
      <img
        src={arrowIcon}
        alt="Arrow icon"
        className="icon arrow"
        onclick="location.href='./#contact'"
      />
      </a>
    </section>
  )
}
