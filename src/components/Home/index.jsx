import React from 'react'
import Gallery from '../Gallery';
import Buttons from '../Buttons';
import "./styles.css";

export default () => {
  return (
    <div>
      <h1 className="homePageTitle">Welcome to My Portfolio</h1>
      <Gallery/>
      {/* <Buttons/> */}
      <div className="high-tech-section">
        <div className="tech-overlay"></div>
        <h2 className="tech-title">Innovating with Technology</h2>
        <p className="tech-description">
         
        </p>
        <div className="tech-icons">
          <i className="fas fa-code"></i>
          <i className="fas fa-database"></i>
          <i className="fas fa-cloud"></i>
        </div>
      </div>
    </div>
  )
}
