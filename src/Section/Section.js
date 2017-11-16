import React from 'react';
import './Section.css';

const section = (props) => (  
  <section className="section">
    <div className="mdl-card mdl-shadow--4dp">
      {props.children}
    </div>
  </section>
);

export default section;
