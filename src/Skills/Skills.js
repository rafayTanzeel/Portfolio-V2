import React from 'react';

const skills = (props) => (
<div className="card-page mdl-card mdl-shadow--4dp">
        <div className="wrapper">
          <div className="contact-card mdl-card mdl-shadow--2dp">
            <div className="mdl-card__title mdl-card--expand">
              <h2 className="mdl-card__title-text">Skills</h2>
            </div>
            <div className="mdl-card__supporting-text">
              <ul className="mdl-list">
                <li className="mdl-list__item mdl-list__item--two-line">
                  <h6>Programming Languages</h6>
                  <span className="mdl-list__item-primary-content">
                    Java, C++, C, Python, Javascript, Scala
                  </span>
                </li>
                <div className="mdl-menu__item--full-bleed-divider"></div>
                <li className="mdl-list__item mdl-list__item--two-line">
                  <h6>Web Frameworks</h6>
                  <span className="mdl-list__item-primary-content">
                    Node.js, Express.js, Angular, React, Redux,
                    <br/>Next.js, Preact, Typescript, Three.js
                  </span>
                </li>
                <div className="mdl-menu__item--full-bleed-divider"></div>
                <li className="mdl-list__item mdl-list__item--two-line">
                  <h6>Bundlers</h6>
                  <span className="mdl-list__item-primary-content">
                    Webpack, Grunt, Gulp, Node Package Manager, Bower </span>
                </li>
                <div className="mdl-menu__item--full-bleed-divider"></div>
                <li className="mdl-list__item mdl-list__item--two-line">
                  <h6>Databases</h6>
                  <span className="mdl-list__item-primary-content">
                    PostgreSQL, SQLite, Realm, MongoDB, Redis
                  </span>
                </li>
                <div className="mdl-menu__item--full-bleed-divider"></div>
                <li className="mdl-list__item mdl-list__item--two-line">
                  <h6>Cloud Computing</h6>
                  <span className="mdl-list__item-primary-content">
                    AWS, Firebase
                  </span>
                </li>
                <div className="mdl-menu__item--full-bleed-divider"></div>
                <li className="mdl-list__item mdl-list__item--two-line">
                  <h6>Mobile API</h6>
                  <span className="mdl-list__item-primary-content">
                    Andriod Development, iOS Development
                  </span>
                </li>
                <div className="mdl-menu__item--full-bleed-divider"></div>
                <li className="mdl-list__item mdl-list__item--two-line">
                  <h6>Dev Environment</h6>
                  <span className="mdl-list__item-primary-content">
                    Vagrant, Docker, Git, Mercurial
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
);

export default skills;
