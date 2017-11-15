import React from 'react';
import SkillList from './SkillList';


const skills = (props) => (
<div className="card-page mdl-card mdl-shadow--4dp">
        <div className="wrapper">
          <div className="contact-card mdl-card mdl-shadow--2dp">
            <div className="mdl-card__title mdl-card--expand">
              <h2 className="mdl-card__title-text">Skills</h2>
            </div>
            <div className="mdl-card__supporting-text">
              <ul className="mdl-list">
                <SkillList title="Programming Languages" skills="Java, C++, C, Python, Javascript, Scala"/>
                <div className="mdl-menu__item--full-bleed-divider"></div>

                <SkillList title="Web Frameworks" skills="Node.js, Express.js, Angular, React, Redux, Next.js, Preact, Typescript, Three.js"/>
                <div className="mdl-menu__item--full-bleed-divider"></div>

                <SkillList title="Bundlers" skills="Webpack, Grunt, Gulp, Node Package Manager, Bower"/>
                <div className="mdl-menu__item--full-bleed-divider"></div>

                <SkillList title="Databases" skills="PostgreSQL, SQLite, Realm, MongoDB, Redis"/>
                <div className="mdl-menu__item--full-bleed-divider"></div>

                <SkillList title="Cloud Computing" skills="AWS, Firebase"/>
                <div className="mdl-menu__item--full-bleed-divider"></div>

                <SkillList title="Mobile API" skills="Andriod Development, iOS Development"/>
                <div className="mdl-menu__item--full-bleed-divider"></div>

                <SkillList title="Dev Environment" skills="Vagrant, Docker, Git, Mercurial"/>
              </ul>
            </div>
          </div>
        </div>
      </div>
);

export default skills;
