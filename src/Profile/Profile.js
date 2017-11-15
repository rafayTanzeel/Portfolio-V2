import React from 'react';

const profile = (props) => (
  <div className="card-page mdl-card mdl-shadow--4dp">
        <div className="mdl-card__title mdl-card--expand">
        </div>
        <div className="profile-info-card">
          <div className="mdl-card__title mdl-card--expand">
            <h2 className="mdl-card__title-text">Rafay Tanzeel</h2>
          </div>
          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--2-col-phone">
              <div className="inner-card-page mdl-card mdl-shadow--2dp">
                <div className="mdl-card__title">
                  <h2 className="mdl-card__title-text">About Me</h2>
                </div>
                <div className="mdl-card__supporting-text inner-title">
                  <h5>I am a Full Stack Web and Mobile Developer</h5>
                </div>
              </div>
            </div>
            <div className="mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--2-col-phone">
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
        </div>


        <div className="mdl-card__menu">
          <a href="https://github.com/rafayTanzeel">
            <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
              <i className="fa fa-github" aria-hidden="true"></i>
            </button>
          </a>
          <a href="https://www.linkedin.com/in/rafaytanzeel">
            <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </button>
          </a>
        </div>

      </div>
);

export default profile;
