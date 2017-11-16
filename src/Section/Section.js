import React from 'react';
import './Section.css';

const section = (props) => (  
  <section className="section mdl-shadow--4dp">
    <div className={props.layout}>
      {props.children}
    </div>
  </section>
);

export default section;
