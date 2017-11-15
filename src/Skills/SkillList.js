import React from 'react';

const skillList = (props) => (
  <li className="mdl-list__item mdl-list__item--two-line">
  <h6>{props.title}</h6>
  <span className="mdl-list__item-primary-content">
    {props.skills}
  </span>
  </li>
);

export default skillList;
