import React from 'react';
import SkillList from './SkillList';
import './Skills.css';

const skills = (props) => (
  <div className="mdl-grid">
    <table className="skills-card mdl-data-table mdl-js-data-table mdl-shadow--2dp mdl-cell--12-col">
    <thead>
      <tr>
        <th className="mdl-data-table__cell--non-numeric"><h1 className="mdl-card__title-text">Skills</h1></th>
      </tr>
    </thead>
    <tbody>
      <SkillList title="Programming Languages" skills="Java, C++, C, Python, Javascript, Scala" />
      <SkillList title="Web Frameworks" skills="Node.js, Express.js, Angular, React, Redux, Next.js, Preact, Typescript, Three.js"/>
      <SkillList title="Bundlers" skills="Webpack, Grunt, Gulp, Node Package Manager, Bower" />
      <SkillList title="Databases" skills="PostgreSQL, SQLite, Realm, MongoDB, Redis" />
      <SkillList title="Cloud Computing" skills="AWS, Firebase, Google Cloud" />
      <SkillList title="Mobile API" skills="Andriod Development, iOS Development" />
      <SkillList title="Dev Environment" skills="Vagrant, Docker, Git, Mercurial" />
    </tbody>
  </table>
  </div>
);

export default skills;



