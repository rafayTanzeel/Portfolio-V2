import React from 'react';
import './Profile.css';
// import rafayPicture from '../assets/rafay.jpg';

const profile = (props) => (
  // <div className="flex-profile-card">  
  <div className="flex-profile-card profile-card-page mdl-card mdl-shadow--4dp">
    <div className="mdl-card__title mdl-card--expand"></div>
    <div className="profile-info-card">
      <div className="mdl-card__title mdl-card--expand">
        <h2 className="mdl-card__title-text">Rafay Tanzeel</h2>
      </div>
      <div className="flex-inner-profile-card">
          <div className="inner-card-page mdl-card mdl-shadow--2dp">
            <div className="mdl-card__title">
              <h2 className="mdl-card__title-text">About Me</h2>
            </div>
            <div className="mdl-card__supporting-text inner-title">
              <h5>I am a Full Stack Web and Mobile Developer</h5>
            </div>
          </div>
          <div className="inner-card-page mdl-card mdl-shadow--2dp">
            <div className="mdl-card__title">
              <h2 className="mdl-card__title-text">Education</h2>
            </div>
            <div className="mdl-card__supporting-text inner-title">
              <h5>BSc in Computer Science</h5>
            </div>
        </div>
      </div>
    </div>

    <div className="social-icons mdl-card__menu">
      <a href="https://github.com/rafayTanzeel" target="_blank" rel="noopener noreferrer">
        <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
          <i className="fa fa-github" aria-hidden="true"></i>
        </button>
      </a>
      <a href="https://www.linkedin.com/in/rafaytanzeel" target="_blank" rel="noopener noreferrer">
        <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </button>
      </a>
    </div>
    </div>
  // </div>
);

export default profile;
